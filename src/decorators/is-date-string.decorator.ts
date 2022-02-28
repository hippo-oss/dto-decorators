import { DecoratorType } from '../enums';
import { IsDateStringOptions } from '../options';
import { decorate } from '../metadata';

export function IsDateString(options: IsDateStringOptions): PropertyDecorator {
    const decorator = DecoratorType.IsDateString;
    return decorate({ decorator, options });
}
