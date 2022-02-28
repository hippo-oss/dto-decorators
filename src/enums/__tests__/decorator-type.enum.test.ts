import { DecoratorType } from '../decorator-type.enum';

describe('DecoratorType', () => {
    describe.each(
        Object.keys(DecoratorType),
    )('%s', (key: string) => {
        const value = DecoratorType[key as keyof typeof DecoratorType];

        it('has equivalent key and value', () => {
            expect(key).toEqual(value);
        });
    });
});
