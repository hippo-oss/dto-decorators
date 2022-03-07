import { IsEnum } from '..';

import { getProperty } from '../../metadata';

enum Foo {
    Bar = 'Bar',
}

describe('decorators', () => {
    describe('IsEnum', () => {
        it('raises error for undecorated property', () => {
            class Example {
                foo!: Foo;
            }
            const options = getProperty(Example, 'foo');

            expect(options).toBeUndefined();
        });

        it('returns options for decorated property', () => {
            class Example {
                @IsEnum({
                    enum: Foo,
                    enumName: 'Foo',
                    optional: false,
                    nullable: false,
                })
                foo!: Foo;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual('IsEnum');
            expect(property?.options).toMatchObject({
                enum: Foo,
                enumName: 'Foo',
                optional: false,
                nullable: false,
            });
        });
    });
});
