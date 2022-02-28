import { DecoratorType } from '../enums';
import { IsBooleanOptions } from '../options';
import { decorate } from '../metadata';

export function IsBoolean(options: IsBooleanOptions): PropertyDecorator {
    const decorator = DecoratorType.IsBoolean;
    return decorate({ decorator, options });
}
