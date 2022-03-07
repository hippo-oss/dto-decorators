import { IsDate } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsDate', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: Date;
            }
            const options = getProperty(Example, 'foo');

            expect(options).toBeUndefined();
        });

        it('returns options for decorated property', () => {
            class Example {
                @IsDate({
                    format: 'date-time',
                    optional: false,
                    nullable: false,
                })
                foo!: Date;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsDate');
            expect(property?.options).toMatchObject({
                format: 'date-time',
                optional: false,
                nullable: false,
            });
        });
    });
});
