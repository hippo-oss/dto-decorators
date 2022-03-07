import { IsNestedOptions } from '../options';
import { decorate } from '../metadata';

export function IsNested(options: IsNestedOptions): PropertyDecorator {
    const decorator = 'IsNested';
    return decorate({ decorator, options });
}
