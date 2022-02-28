import { DecoratorType } from '../enums';
import { IsNestedOptions } from '../options';
import { decorate } from '../metadata';

export function IsNested(options: IsNestedOptions): PropertyDecorator {
    const decorator = DecoratorType.IsNested;
    return decorate({ decorator, options });
}
