import { isClass } from '../options';
import { SchemaProperty } from '../schema';
import { DTODecoratorName, DTODecoratorOptions, PropertyDecoratorFactory, Target } from '../types';
import { putProperty } from './metadata.storage';

/* Create a property decorator that saves schema metadata.
 *
 * The decorator's `target` MUST be a class.
 */
export function storeMetadata<Name extends DTODecoratorName>(
    name: Name,
): PropertyDecoratorFactory<DTODecoratorOptions<Name>> {
    return (options: DTODecoratorOptions<Name>): PropertyDecorator => {
        const property = {
            name,
            options,
        } as SchemaProperty;

        return (target: Target, propertyKey: string | symbol): void => {
            if (!isClass(target)) {
                putProperty(target, propertyKey, property);
            } else {
                putProperty(target.constructor, propertyKey, property);
            }
        };
    };
}
