import { DecoratorType } from '../enums';
import { IsStringOptions } from '../options';
import { decorate } from '../metadata';

export function IsString(options: IsStringOptions): PropertyDecorator {
    const decorator = DecoratorType.IsString;
    return decorate({ decorator, options });
}
