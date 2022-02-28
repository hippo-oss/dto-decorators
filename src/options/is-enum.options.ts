import { BaseOptions } from './base.options';

export interface IsEnumOptions extends BaseOptions {
    enum: Record<string, unknown>,
    enumName?: string;
}
