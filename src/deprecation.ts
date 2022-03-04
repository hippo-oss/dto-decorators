import { BaseOptions } from './options';
import { Target } from './types';

export interface Warnings {
    (message: string): void;
}

/* Define a property decorator transformation that warns on deprecation.
 */
export function withDeprecationWarnings<Options extends BaseOptions>(
    { deprecated }: Options,
): PropertyDecorator {
    return (
        target: Target,
        propertyKey: string | symbol,
    ): void => {
        if (!deprecated) {
            return;
        }

        let value: unknown;

        function setter(newValue: unknown): void {
            const self = setter as unknown as { called?: boolean };

            if (!self.called) {
                /* NB: the status of `util.deprecate` seems to be that it is supported but will not be maintained,
                 * meaning that it's probably better to use `process.emitWarning`.
                 */
                process.emitWarning(
                    `${target.constructor.name}.${String(propertyKey)} is deprecated.`,
                    {
                        type: 'DeprecationWarning',
                    },
                );
                self.called = true;
            }
            value = newValue;
        }

        Object.defineProperty(target, propertyKey, {
            get: () => value,
            set: setter,
        });
    };
}
