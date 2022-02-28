import { SchemaProperty } from './property';

/* A schema defines the set of decorators and options for a class.
 */
export type Schema<T> = {
    [Key in keyof T]?: SchemaProperty;
};
