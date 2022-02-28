import { DecoratorType } from '../enums';
import { IsUUIDOptions } from '../options';
import { decorate } from '../metadata';

export function IsUUID(options: IsUUIDOptions): PropertyDecorator {
    const decorator = DecoratorType.IsUUID;
    return decorate({ decorator, options });
}
