import { isClass } from '../options';
import { SchemaProperty } from '../schema';
import { Target } from '../types';
import { putProperty } from './metadata.storage';

/* Decorate a property with the given options.
 *
 * The decorator's `target` MUST be a class.
 */
export function decorate(property: SchemaProperty): PropertyDecorator {
    return (target: Target, propertyKey: string | symbol): void => {

        if (!isClass(target)) {
            putProperty(target, propertyKey, property);
        } else {
            putProperty(target.constructor, propertyKey, property);
        }
    };
}
