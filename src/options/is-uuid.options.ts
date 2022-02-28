import { BaseOptions } from './base.options';

export interface IsUUIDOptions extends BaseOptions {
    version?: '3' | '4' | '5' | 'all',
}
