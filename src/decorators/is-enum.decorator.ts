import { DecoratorType } from '../enums';
import { IsEnumOptions } from '../options';
import { decorate } from '../metadata';

export function IsEnum(options: IsEnumOptions): PropertyDecorator {
    const decorator = DecoratorType.IsEnum;
    return decorate({ decorator, options });
}
