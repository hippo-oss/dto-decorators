import { IsStringOptions } from '../options';
import { decorate } from '../metadata';

export function IsString(options: IsStringOptions): PropertyDecorator {
    const decorator = 'IsString';
    return decorate({ decorator, options });
}
