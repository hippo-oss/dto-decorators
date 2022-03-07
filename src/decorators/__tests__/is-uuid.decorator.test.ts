import { IsUUID } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsUUID', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: string;
            }
            const property = getProperty(Example, 'foo');

            expect(property).toBeUndefined();
        });

        it('returns property for decorated property', () => {
            class Example {
                @IsUUID({
                    optional: false,
                    nullable: false,
                    version: '4',
                })
                foo!: string;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsUUID');
            expect(property?.options).toMatchObject({
                optional: false,
                nullable: false,
                version: '4',
            });
        });
    });
});
