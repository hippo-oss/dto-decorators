import { BaseOptions } from './base.options';

export interface IsStringOptions extends BaseOptions {
    maxLength?: number,
    minLength?: number,
    pattern?: RegExp;
}
