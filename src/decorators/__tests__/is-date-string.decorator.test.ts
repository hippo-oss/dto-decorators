import { IsDateString } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsDateString', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: string;
            }
            const property = getProperty(Example, 'foo');

            expect(property).toBeUndefined();
        });

        it('returns property for decorated property', () => {
            class Example {
                @IsDateString({
                    format: 'date',
                    optional: false,
                    nullable: false,
                })
                foo!: string;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsDateString');
            expect(property?.options).toMatchObject({
                format: 'date',
                optional: false,
                nullable: false,
            });
        });
    });
});
