import { IsString } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsString', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: string;
            }
            const property = getProperty(Example, 'foo');

            expect(property).toBeUndefined();
        });

        it('returns property for decorated property', () => {
            class Example {
                @IsString({
                    optional: false,
                    pattern: /[a-z]+/,
                    nullable: false,
                })
                foo!: string;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsString');
            expect(property?.options).toMatchObject({
                optional: false,
                pattern: /[a-z]+/,
                nullable: false,
            });
        });
    });
});
