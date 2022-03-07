import { NOOP_DECORATORS } from '../noop';
import { DTODecoratorFactories } from '../types';
import { storeMetadata } from './metadata.decorator';

/* Define a dto decorator factory that saves decorator metadata.
 */
export const METADATA_DECORATORS: DTODecoratorFactories = Object.keys(NOOP_DECORATORS).reduce(
    (acc, name) => ({
        ...acc,
        [name]: storeMetadata(name as keyof DTODecoratorFactories),
    }),
    {} as DTODecoratorFactories,
);
