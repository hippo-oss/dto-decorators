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
import { DTODecoratorName } from './dto-decorator-name.type';

/* Each named decorator uses a set of typed options, all of which inherit from a shared set of `BaseOptions`.
 */
export type DTODecoratorOptions<Name extends DTODecoratorName> =
    /* eslint-disable @typescript-eslint/indent */
    Name extends 'IsBoolean' ? IsBooleanOptions :
    Name extends 'IsDate' ? IsDateOptions :
    Name extends 'IsDateString' ? IsDateStringOptions :
    Name extends 'IsEnum' ? IsEnumOptions :
    Name extends 'IsInteger' ? IsIntegerOptions :
    Name extends 'IsNested' ? IsNestedOptions :
    Name extends 'IsNumber' ? IsNumberOptions :
    Name extends 'IsString' ? IsStringOptions :
    Name extends 'IsUUID' ? IsUUIDOptions :
    never;
/* eslint-enable @typescript-eslint/indent */
