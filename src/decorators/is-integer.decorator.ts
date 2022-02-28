import { DecoratorType } from '../enums';
import { IsIntegerOptions } from '../options';
import { decorate } from '../metadata';

export function IsInteger(options: IsIntegerOptions): PropertyDecorator {
    const decorator = DecoratorType.IsInteger;
    return decorate({ decorator, options });
}
