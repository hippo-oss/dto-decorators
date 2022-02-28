# dto-decorators

DTO type decorators.


## What Problem Does This Project Solve?

TypeScript applications must take special care at their boundaries to ensure that runtime data matches its type
definitions. For example, many applications will extract JSON from an HTTP request might and (naively) cast this data
to a TypeScript type:

```ts
const input = await request.json() as MyInputType
```

This approach, however, offers no guarantee that the input type actually matches the type declaration; a cast merely
tells `tsc` that a type _should_ be treated in a particular way.

A common solution to this mismatch is to perform runtime validation of a Data Transfer Object (DTO), thereby ensuring
that the _declared_ type of each data item matches its _actual_ type.

```ts
const json = await request.json();
const input = validate(MyInputType, json);
```

Because TypeScript types lose their type information at runtime, the DTO strategy only works if some other layer
instruments DTOs with runtime metadata. A common solution in this space is to use _decorators_ to attach type
information to class.

This approach is so popular, in fact, that there are many implementations end up using *multiple* decorator libraries,
including:

 - [class-transformer](https://github.com/typestack/class-transformer)
 - [class-validator](https://github.com/typestack/class-validator)
 - [@nestjs/swagger](https://github.com/nestjs/swagger)

This library aims to provide an implementation-agnostic decorator API that can be used to generate appropriate
decorators across multiple library implementations without introducing rendundant decorator information.


## Decorator Usage

This library exports a handful of decorators and corresponding options. DTO implementations simply decorator
class properties with the appropriate type and options:

```ts
import { IsInteger } from '@hippo-oss/dto-decorator's;

class Example {

    @IsInteger({
        description: 'An example value',
    })
    public value!: number;
}
```

## Decorators

The following decorators are supported:

| **Decorator**  | **Description**                     |
| -------------- | ----------------------------------- |
| `IsBoolean`    | Declares a boolean value.           |
| `IsDate`       | Declares a `Date` value.            |
| `IsDateString` | Declares an ISO 8601 date string.   |
| `IsEnum`       | Declares an enumerated value.       |
| `IsInteger`    | Declares an integer number.         |
| `IsNested`     | Declares a nested object type.      |
| `IsNumber`     | Declares a floating point number.   |
| `IsString`     | Declares a string.                  |
| `IsUUID`       | Declares a UUID string.             |

### Decorator Options

Decorators may be passed various options, depending on their type.

All options are optional expect where indicated.

| Option            | Decorator      | Description                                         |
| ----------------- | -------------- | --------------------------------------------------- |
| `description`     | *all*          | Description of the field; exposed in OpenAPI.       |
| `expose`          | *all*          | Enables alternate name to be set for the field.     |
| `isArray`         | *all*          | Designates an array of values.                      |
| `name`            | *all*          | Alternate name of the field; exposed in OpenAPI.    |
| `nullable`        | *all*          | Whether the field can be set to `null`.             |
| `optional`        | *all*          | Whether the field be set to `undefined` or omitted. |
| `deprecated`      | *all*          | Whether the field appears as deprecated             |
| ----------------- | -------------- | --------------------------------------------------- |
| `format`          | `IsDate`       | The OpenaPI date format; defaults to `date-time`.   |
| ----------------- | -------------- | --------------------------------------------------- |
| `format`          | `IsDateString` | The OpenAPI date format; defaults to `date`.        |
| ----------------- | -------------- | --------------------------------------------------- |
| `enum` (required) | `IsEnum`       | The enum type.                                      |
| `enumName`        | `IsEnum`       | The enum name; required to correctly export OpenAPI |
| ----------------- | -------------- | --------------------------------------------------- |
| `maxValue`        | `IsInteger`    | The maximum value of the field.                     |
| `minValue`        | `IsInteger`    | The minimum value of the field.                     |
| ----------------- | -------------- | --------------------------------------------------- |
| `type` (required) | `IsNested`     | The nested type.                                    |
| ----------------- | -------------- | --------------------------------------------------- |
| `maxValue`        | `IsNumber`     | The maximum value of the field.                     |
| `minValue`        | `IsNumber`     | The minimum value of the field.                     |
| ----------------- | -------------- | --------------------------------------------------- |
| `maxLength`       | `IsString`     | The maximum length of the string.                   |
| `minLength`       | `IsString`     | The minimum length of the string.                   |
| `pattern`         | `IsString`     | A regex pattern for validating the string.          |
| ----------------- | -------------- | --------------------------------------------------- |
| `version`         | `IsUUID`       | The type of UUID.                                   |


### Array Options

Any property can be declared as an array:

```ts
class Example {
   @IsString({
       isArray: true,
   })
   values!: string[];
}
```

The `isArray` option may be supplied as either the literal `true` or as `ArraySizeOptions`:

```ts
class Example {
   @IsString({
       isArray: {
           maxSize: 30,
           minSize: 0,
       },
   })
   values!: string[];
}
```

### Enum Options

Enumerated types work pretty much as expected:

```ts
enum Color {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
}

class Example {
   @IsEnum({
      enum: Color,
      enumName: 'Color',
   })
   color!: Color;
}
```

The `enumName` value is optional, but encouraged. Some library implementations will not be able to correctly
correlate the same enum value across multiple usages without a unifying name.


### Nested Options

Decorator values that use another object type should be decorated with `IsNested`:

```ts
class Child {
    @IsString()
    value!: string;
}

class Parent {
     @IsNested({
         type: Child,
     })
     child!: Child;
}
```

Every child type is expected to define *at least one* decorator field. Failure to do so may result
in errors in some library implementations.
