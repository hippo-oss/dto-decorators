import { DecoratorType } from '../enums';
import { IsNumberOptions } from '../options';
import { decorate } from '../metadata';

export function IsNumber(options: IsNumberOptions): PropertyDecorator {
    const decorator = DecoratorType.IsNumber;
    return decorate({ decorator, options });
}
