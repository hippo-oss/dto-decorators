import { IsBoolean } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsBoolean', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: boolean;
            }
            const property = getProperty(Example, 'foo');

            expect(property).toBeUndefined();
        });

        it('returns property for decorated property', () => {
            const validate = () => null;

            class Example {
                @IsBoolean({
                    deprecated: false,
                    description: 'Description',
                    example: true,
                    isArray: {
                        maxItems: 10,
                        minItems: 0,
                    },
                    name: 'name',
                    nullable: false,
                    optional: false,
                    validate,
                })
                foo!: boolean;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsBoolean');
            expect(property?.options).toMatchObject({
                deprecated: false,
                description: 'Description',
                example: true,
                isArray: {
                    maxItems: 10,
                    minItems: 0,
                },
                name: 'name',
                nullable: false,
                optional: false,
                validate,
            });
        });
    });
});
