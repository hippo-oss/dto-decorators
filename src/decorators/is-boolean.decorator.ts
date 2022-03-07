import { IsBooleanOptions } from '../options';
import { decorate } from '../metadata';

export function IsBoolean(options: IsBooleanOptions): PropertyDecorator {
    const decorator = 'IsBoolean';
    return decorate({ decorator, options });
}
