import { BaseOptions } from '../options';
import { Target } from '../types';

import { deprecate } from './deprecate.decorator';

/* Define a property decorator transformation that warns on deprecation.
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
