import { DecoratorType } from '../../enums';
import {
    getProperty,
    getSchema,
    putProperty,
    putSchema,
} from '../metadata.storage';

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

            const schema = {
                foo: {
                    decorator: DecoratorType.IsString,
                    options: {
                        nullable: false,
                        optional: false,
                    },
                },
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

            const property = {
                decorator: DecoratorType.IsString,
                options: {
                    nullable: false,
                    optional: false,
                },
            };
            putProperty(Example, 'foo', property);

            expect(getProperty(Example, 'foo')).toEqual(property);
        });
        it('aggregates property if multiple property exist', () => {
            class Example {
                foo!: string;
                bar!: number;
            }

            const property1 = {
                decorator: DecoratorType.IsString,
                options: {
                    nullable: false,
                    optional: false,
                },
            };
            const property2 = {
                decorator: DecoratorType.IsNumber,
                options: {
                    nullable: true,
                    optional: true,
                },
            };
            putProperty(Example, 'foo', property1);
            putProperty(Example, 'bar', property2);

            expect(getProperty(Example, 'foo')).toEqual(property1);
            expect(getProperty(Example, 'bar')).toEqual(property2);
        });
    });
});
