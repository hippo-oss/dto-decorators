import { DTODecoratorName, DTODecoratorOptions } from '../types';

export interface IsSchemaProperty<Name extends DTODecoratorName> {
    decorator: Name,
    options: DTODecoratorOptions<Name>,
}

/* eslint-disable @typescript-eslint/indent */
export type SchemaProperty =
    IsSchemaProperty<'IsBoolean'> |
    IsSchemaProperty<'IsDate'> |
    IsSchemaProperty<'IsDateString'> |
    IsSchemaProperty<'IsEnum'> |
    IsSchemaProperty<'IsInteger'> |
    IsSchemaProperty<'IsNested'> |
    IsSchemaProperty<'IsNumber'> |
    IsSchemaProperty<'IsString'> |
    IsSchemaProperty<'IsUUID'>;
/* eslint-enable @typescript-eslint/indent */
