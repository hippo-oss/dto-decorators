import { BaseOptions } from './base.options';

/* We need a type to differentiate between plain objects and classes.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Constructor<T = any> extends Function {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new(...args: any[]): T;
}

/* Define a type guard to detect if an instance is a constructable class.
 */
export function isClass<T>(target: unknown): target is Constructor<T> {
    return (target as Constructor<unknown>).constructor !== undefined;
}

export interface IsNestedOptions extends BaseOptions {
    type: Constructor<unknown>,
}
