import { IsInteger } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsInteger', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: number;
            }
            const property = getProperty(Example, 'foo');

            expect(property).toBeUndefined();
        });

        it('returns property for decorated property', () => {
            class Example {
                @IsInteger({
                    maxValue: 100,
                    minValue: 0,
                    optional: false,
                    nullable: false,
                })
                foo!: number;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsInteger');
            expect(property?.options).toMatchObject({
                maxValue: 100,
                minValue: 0,
                optional: false,
                nullable: false,
            });
        });
    });
});
