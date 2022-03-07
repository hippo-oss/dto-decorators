import { NOOP_DECORATORS } from '../noop';
import { BaseOptions } from '../options';
import { DTODecoratorFactories, Target } from '../types';

import { deprecate } from './deprecation.decorator';

/* Define a dto decorator factory that warns on deprecation.
 */
export function withDeprecationWarnings<Options extends BaseOptions>(
    { deprecated }: Options,
): PropertyDecorator {
    return (
        target: Target,
        propertyKey: string | symbol,
    ): void => {
        if (deprecated) {
            deprecate(target, propertyKey);
        }
    };
}

/* Define a dto decorator factory that saves decorator metadata.
 */
export const DEPRECATION_DECORATORS: DTODecoratorFactories = Object.keys(NOOP_DECORATORS).reduce(
    (acc, name) => ({
        ...acc,
        [name]: withDeprecationWarnings,
    }),
    {} as DTODecoratorFactories,
);
