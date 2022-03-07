import { IsDateStringOptions } from '../options';
import { decorate } from '../metadata';

export function IsDateString(options: IsDateStringOptions): PropertyDecorator {
    const decorator = 'IsDateString';
    return decorate({ decorator, options });
}
