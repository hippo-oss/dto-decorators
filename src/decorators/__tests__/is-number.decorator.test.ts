import { IsNumber } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsNumber', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: number;
            }
            const property = getProperty(Example, 'foo');

            expect(property).toBeUndefined();
        });

        it('returns property for decorated property', () => {
            class Example {
                @IsNumber({
                    minValue: 0.0,
                    maxValue: 1.0,
                    optional: false,
                    nullable: false,
                })
                foo!: number;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsNumber');
            expect(property?.options).toMatchObject({
                optional: false,
                nullable: false,
            });
        });
    });
});
