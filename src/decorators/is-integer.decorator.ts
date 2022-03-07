import { IsIntegerOptions } from '../options';
import { decorate } from '../metadata';

export function IsInteger(options: IsIntegerOptions): PropertyDecorator {
    const decorator = 'IsInteger';
    return decorate({ decorator, options });
}
