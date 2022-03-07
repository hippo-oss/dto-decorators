import { IsDateOptions } from '../options';
import { decorate } from '../metadata';

export function IsDate(options: IsDateOptions): PropertyDecorator {
    const decorator = 'IsDate';
    return decorate({ decorator, options });
}
