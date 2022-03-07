import { NOOP_DECORATORS } from './noop';
import {
    DTODecoratorFactories,
    DTODecoratorName,
    composePropertyDecoratorFactories,
    selectPropertyDecoratorFactories,
} from './types';

/* Consumers that wish to define their own behavior may compose sets of these decorator factories together.
 */
export function composeDecoratorFactories(
    factories: DTODecoratorFactories[],
): DTODecoratorFactories {
    return Object.keys(NOOP_DECORATORS).reduce(
        (acc, name) => ({
            ...acc,
            [name]: composePropertyDecoratorFactories(
                selectPropertyDecoratorFactories(
                    name as unknown as DTODecoratorName,
                    factories,
                ),
            ),
        }),
        {} as DTODecoratorFactories,
    );
}
