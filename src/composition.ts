import {
    DTODecoratorName,
    DTODecoratorFactories,
    DTODecoratorOptions,
    PropertyDecoratorFactory,
    Target,
} from './types';

/* Multiple property decorators can be composed into a new property decorator.
 */
export function composePropertyDecorators(
    decorators: Array<PropertyDecorator | undefined>,
): PropertyDecorator {
    return (target: Target, propertyKey: string | symbol): void => {
        for (const decorator of decorators) {
            if (decorator !== undefined) {
                decorator(target, propertyKey);
            }
        }
    };
}

/* Multiple property decorator factories of the same type can be composed into a new factory.
 */
export function composePropertyDecoratorFactories<Name extends DTODecoratorName>(
    factories: PropertyDecoratorFactory<DTODecoratorOptions<Name>>[],
): PropertyDecoratorFactory<DTODecoratorOptions<Name>> {
    return (options: DTODecoratorOptions<Name>): PropertyDecorator => composePropertyDecorators(
        factories.map(
            (factory) => factory(options),
        ),
    );
}

/* A specific property decorator factory can be selected from a factory by name.
 */
export function selectPropertyDecoratorFactory<Name extends DTODecoratorName>(
    name: Name,
    factory: DTODecoratorFactories,
): PropertyDecoratorFactory<DTODecoratorOptions<Name>> {
    return factory[name] as unknown as PropertyDecoratorFactory<DTODecoratorOptions<Name>>;
}

/* A specific property decorator factory can be selected from a set of factories by name.
 */
export function selectPropertyDecoratorFactories<Name extends DTODecoratorName>(
    name: Name,
    factories: DTODecoratorFactories[],
): PropertyDecoratorFactory<DTODecoratorOptions<Name>>[] {
    return factories.map(
        (factory) => selectPropertyDecoratorFactory<Name>(name, factory),
    );

}
