import { DTODecoratorName } from './dto-decorator-name.type';
import { DTODecoratorOptions } from './dto-decorator-options.type';
import {
    MandatoryPropertyDecoratorFactory,
    OptionalPropertyDecoratorFactory,
} from './property-decorator-factory.type';

/* Some decorator names have mandatory options.
 */
export type HasMandatoryOptions = 'IsEnum' | 'IsNested';

// eslint-disable-next-line max-len
export type DTODecoratorFactory<Name extends DTODecoratorName, Options = DTODecoratorOptions<Name>> = Name extends HasMandatoryOptions
    ? MandatoryPropertyDecoratorFactory<Options>
    : OptionalPropertyDecoratorFactory<Options>;

/* Consumers of the library will import (or create) a suite of factories that create property decorators for the
 * supported set of decorators and options.
 */
export type DTODecoratorFactories = {
    [Name in DTODecoratorName]: DTODecoratorFactory<Name>;
};
