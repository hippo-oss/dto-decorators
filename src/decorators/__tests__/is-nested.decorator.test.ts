import { DecoratorType } from '../../enums';
import { IsNested } from '..';

import { getProperty } from '../../metadata';

describe('decorators', () => {
    describe('IsNested', () => {
        it('raises error for undecorated property', () => {
            class Foo {
            }

            class Example {
                foo!: Foo;
            }
            const property = getProperty(Example, 'foo');

            expect(property).toBeUndefined();
        });

        it('returns property for decorated property', () => {
            class Foo {
            }

            class Example {
                @IsNested({
                    type: Foo,
                    optional: false,
                    nullable: false,
                })
                foo!: Foo;
            }

            const property = getProperty(Example, 'foo');

            expect(property?.decorator).toEqual(DecoratorType.IsNested);
            expect(property?.options).toMatchObject({
                type: Foo,
                optional: false,
                nullable: false,
            });
        });
    });
});
