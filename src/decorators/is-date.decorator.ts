import { DecoratorType } from '../enums';
import { IsDateOptions } from '../options';
import { decorate } from '../metadata';

export function IsDate(options: IsDateOptions): PropertyDecorator {
    const decorator = DecoratorType.IsDate;
    return decorate({ decorator, options });
}
