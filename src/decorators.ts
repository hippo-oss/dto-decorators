import { DTODecoratorFactories } from './types';

const noop = () => null;
const noopFactory = () => noop;

/* The library provides a baseline set of factories that do nothing.
*/
export const NOOP_DECORATORS: DTODecoratorFactories = {
    IsBoolean: noopFactory,
    IsDate: noopFactory,
    IsDateString: noopFactory,
    IsEnum: noopFactory,
    IsInteger: noopFactory,
    IsNested: noopFactory,
    IsNumber: noopFactory,
    IsString: noopFactory,
    IsUUID: noopFactory,
};
