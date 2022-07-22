import {
    composePropertyDecoratorFactories,
    selectPropertyDecoratorFactories,
} from './composition';
import { NOOP_DECORATORS } from './decorators';
import {
    DTODecoratorFactories,
    DTODecoratorName,
} from './types';

/* Consumers that wish to define their own behavior may compose sets of these decorator factories together.
 */
export function composeDecoratorFactories<
    CustomDTODecoratorFactories extends DTODecoratorFactories = DTODecoratorFactories,
>(
    factories: (DTODecoratorFactories | CustomDTODecoratorFactories)[],
): CustomDTODecoratorFactories {
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
        {} as CustomDTODecoratorFactories,
    );
}
