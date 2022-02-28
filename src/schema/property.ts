import { DecoratorType } from '../enums';
import {
    IsBooleanOptions,
    IsDateOptions,
    IsDateStringOptions,
    IsEnumOptions,
    IsIntegerOptions,
    IsNestedOptions,
    IsNumberOptions,
    IsStringOptions,
    IsUUIDOptions,
} from '../options';

export interface IsBooleanProperty {
    decorator: DecoratorType.IsBoolean,
    options: IsBooleanOptions,
}

export interface IsDateProperty {
    decorator: DecoratorType.IsDate,
    options: IsDateOptions,
}

export interface IsDateStringProperty {
    decorator: DecoratorType.IsDateString,
    options: IsDateStringOptions,
}

export interface IsEnumProperty {
    decorator: DecoratorType.IsEnum,
    options: IsEnumOptions,
}

export interface IsIntegerProperty {
    decorator: DecoratorType.IsInteger,
    options: IsIntegerOptions,
}

export interface IsNestedProperty {
    decorator: DecoratorType.IsNested,
    options: IsNestedOptions,
}

export interface IsNumberProperty {
    decorator: DecoratorType.IsNumber,
    options: IsNumberOptions,
}

export interface IsStringProperty {
    decorator: DecoratorType.IsString,
    options: IsStringOptions,
}

export interface IsUUIDProperty {
    decorator: DecoratorType.IsUUID,
    options: IsUUIDOptions,
}

/* eslint-disable @typescript-eslint/indent */
export type SchemaProperty = IsBooleanProperty
    | IsDateProperty
    | IsDateStringProperty
    | IsEnumProperty
    | IsIntegerProperty
    | IsNestedProperty
    | IsNumberProperty
    | IsStringProperty
    | IsUUIDProperty;
/* eslint-enable @typescript-eslint/indent */
