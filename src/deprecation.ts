import { BaseOptions } from './options';
import { PropertyDecoratorTransformer, Target } from './types';

export interface Warnings {
    (message: string): void;
}

/* Define a property decorator transformation that warns on deprecation.
 */
export function withDeprecationWarnings<Options extends BaseOptions>(
    // eslint-disable-next-line no-console
    onWarning: Warnings = console.warn,
): PropertyDecoratorTransformer<Options> {
    return (options: Options): PropertyDecorator => (
        target: Target,
        propertyKey: string | symbol,
    ): void => {
        let value: unknown;

        const getter = () => value;
        const setter = (newValue: unknown) => {
            onWarning(`${target.constructor.name}.${String(propertyKey)} is deprecated.`);
            value = newValue;
        };

        if (options.deprecated) {
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter,
            });
        }
    };
}
