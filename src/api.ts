import {
    IsBoolean,
    IsDate,
    IsDateString,
    IsEnum,
    IsInteger,
    IsNested,
    IsNumber,
    IsString,
    IsUUID,
} from './decorators';
import {
    DTODecoratorFactories,
    DTODecoratorName,
    composePropertyDecoratorFactories,
    selectPropertyDecoratorFactories,
} from './types';

/* The library provides a baseline set of factories that persists options using `reflect-metadata`.
 */
export const FACTORIES: DTODecoratorFactories = {
    IsBoolean,
    IsDate,
    IsDateString,
    IsEnum,
    IsInteger,
    IsNested,
    IsNumber,
    IsString,
    IsUUID,
};

/* Consumers that wish to define their own behavior may compose sets of these decorator factories together.
 */
export function composeDecoratorFactories(
    factories: DTODecoratorFactories[],
): DTODecoratorFactories {
    return Object.keys(FACTORIES).reduce(
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
