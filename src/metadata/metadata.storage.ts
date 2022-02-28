import 'reflect-metadata';

import { Schema, SchemaProperty } from '../schema';
import { Target } from '../types';
import { METADATA_KEY } from './metadata.constants';

/* Save schema metadata.
 */
export function putSchema<T>(
    target: Target,
    schema: Schema<T>,
): void {
    Reflect.defineMetadata(
        METADATA_KEY,
        schema,
        target,
    );
}

/* Get schema metadata.
 */
export function getSchema<T>(
    target: Target,
): Schema<T> | undefined {
    const schema = Reflect.getMetadata(
        METADATA_KEY,
        target,
    ) as unknown;

    if (schema === undefined) {
        return undefined;
    }

    return schema as Schema<T>;
}

/* Save option metadata.
 */
export function putProperty<T>(
    target: Target,
    propertyKey: string | symbol,
    property: SchemaProperty,
): void {
    const key = String(propertyKey) as keyof T;

    const schema = getSchema<T>(target) ?? {} as Schema<T>;
    schema[key] = property;

    putSchema(target, schema);
}

/* Retrieve saved option metadata.
 */
export function getProperty<T>(
    target: Target,
    propertyKey: string | symbol,
): SchemaProperty | undefined {
    const key = String(propertyKey) as keyof T;

    const schema = getSchema<T>(target);

    if (schema === undefined || schema[key] === undefined) {
        return undefined;
    }

    return schema[key] as SchemaProperty;
}
