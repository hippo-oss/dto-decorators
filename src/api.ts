import {
    IsBoolean,
    IsDate,
    IsDateString,
    IsEnum,
    IsInteger,
    IsNested,
    IsString,
    IsUUID,
} from './decorators';
import {
    IsBooleanOptions,
    IsDateOptions,
    IsDateStringOptions,
    IsEnumOptions,
    IsIntegerOptions,
    IsNestedOptions,
    IsStringOptions,
    IsUUIDOptions,
} from './options';
import {
    PropertyDecoratorFactory,
    PropertyDecoratorTransformer,
} from './types';

/* The library provides a set of decorator factories.
 *
 * Each factory takes options and return a `PropertyDecorator`. These factories can be imported directly and,
 * more importantly, can be referenced as a single type that can be  *tranformed* into another implementation.
 */
export interface DTODecoratorFactories {
    IsBoolean: PropertyDecoratorFactory<IsBooleanOptions>;
    IsDate: PropertyDecoratorFactory<IsDateOptions>;
    IsDateString: PropertyDecoratorFactory<IsDateStringOptions>;
    IsEnum: PropertyDecoratorFactory<IsEnumOptions>;
    IsInteger: PropertyDecoratorFactory<IsIntegerOptions>;
    IsNested: PropertyDecoratorFactory<IsNestedOptions>;
    IsString: PropertyDecoratorFactory<IsStringOptions>;
    IsUUID: PropertyDecoratorFactory<IsUUIDOptions>;
}

/* The factories provided by this library (only) write options as metadata.
 */
export const FACTORIES: DTODecoratorFactories = {
    IsBoolean,
    IsDate,
    IsDateString,
    IsEnum,
    IsInteger,
    IsNested,
    IsString,
    IsUUID,
};

/* The factories can be transformed into an alternate implementation.
 */
export type DTODecoratorTransformers = {
    [Key in keyof DTODecoratorFactories]?: PropertyDecoratorTransformer;
};

/* Applying a transformer to a factory produces a new factory.
 */
export function applyTransformer<Options>(
    factory: PropertyDecoratorFactory<Options>,
    transformer: PropertyDecoratorTransformer = (decorator: PropertyDecorator) => decorator,
): PropertyDecoratorFactory<Options> {
    return (options: Options) => transformer(factory(options));
}

/* An implementation can produce its own factories using `buildDecoratorFactories` to map over the factories.
 */
export function buildDecoratorFactories(
    transformers: DTODecoratorTransformers,
    decorators: DTODecoratorFactories = FACTORIES,
): DTODecoratorFactories {
    return Object.fromEntries(
        Object.entries(decorators).map(
            ([key, factory]: [string, PropertyDecoratorFactory<unknown>]) => ([
                key,
                applyTransformer(
                    factory,
                    transformers[key as keyof DTODecoratorFactories],
                ),
            ]),
        ),
    ) as unknown as DTODecoratorFactories;
}
