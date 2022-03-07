import { IsUUIDOptions } from '../options';
import { decorate } from '../metadata';

export function IsUUID(options: IsUUIDOptions): PropertyDecorator {
    const decorator = 'IsUUID';
    return decorate({ decorator, options });
}
