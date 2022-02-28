/* We need a type to differentiate between plain objects and classes.
 */
export type Constructor<T> = {
    new(...args: unknown[]): T;
};

/* Define a type guard to detect if an instance is a constructable class.
 */
export function isClass<T>(target: unknown): target is Constructor<T> {
    return (target as Constructor<unknown>).constructor !== undefined;
}
