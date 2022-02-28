import { Constructor } from '../types';
import { BaseOptions } from './base.options';

export interface IsNestedOptions extends BaseOptions {
    type: Constructor<unknown>,
}
