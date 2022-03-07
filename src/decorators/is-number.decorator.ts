import { IsNumberOptions } from '../options';
import { decorate } from '../metadata';

export function IsNumber(options: IsNumberOptions): PropertyDecorator {
    const decorator = 'IsNumber';
    return decorate({ decorator, options });
}
