import { DecoratorType } from '../../enums';
import {
    getProperty,
    getSchema,
    putProperty,
    putSchema,
} from '../metadata.storage';
import { IsNumberProperty, IsStringProperty } from '../../schema';

describe('MetadataStorage', () => {
    describe('getSchema', () => {
        it('returns undefined if schema do not exist', () => {
            class Example {
            }

            expect(getSchema(Example)).toBeUndefined();
        });
        it('returns schema if schema exist', () => {
            class Example {
                foo!: string;
            }

            const foo: IsStringProperty = {
                decorator: DecoratorType.IsString,
                options: {
                    nullable: false,
                    optional: false,
                },
            };

            const schema = {
                foo,
            };
            putSchema(Example, schema);

            expect(getSchema(Example)).toEqual(schema);
        });
    });

    describe('getProperty', () => {
        it('returns undefined if options do not exist', () => {
            class Example {
            }

            expect(getProperty(Example, 'foo')).toBeUndefined();
        });
        it('returns undefined if options do not exist', () => {
            class Example {
                foo!: string;
            }

            const foo: IsStringProperty = {
                decorator: DecoratorType.IsString,
                options: {
                    nullable: false,
                    optional: false,
                },
            };
            putProperty(Example, 'foo', foo);

            expect(getProperty(Example, 'foo')).toEqual(foo);
        });
        it('aggregates property if multiple property exist', () => {
            class Example {
                foo!: string;
                bar!: number;
            }

            const foo: IsStringProperty = {
                decorator: DecoratorType.IsString,
                options: {
                    nullable: false,
                    optional: false,
                },
            };
            const bar: IsNumberProperty = {
                decorator: DecoratorType.IsNumber,
                options: {
                    nullable: true,
                    optional: true,
                },
            };
            putProperty(Example, 'foo', foo);
            putProperty(Example, 'bar', bar);

            expect(getProperty(Example, 'foo')).toEqual(foo);
            expect(getProperty(Example, 'bar')).toEqual(bar);
        });
    });
});
