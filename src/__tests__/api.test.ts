import { composeDecoratorFactories, NOOP_DECORATORS, PropertyDecoratorFactory } from '..';

describe('composeDecoratorFactories', () => {
    it('produces new decorator factories', () => {
        const spy = jest.fn();
        const factory = () => spy;

        const factories = composeDecoratorFactories([{
            IsBoolean: factory,
            IsDate: factory,
            IsDateString: factory,
            IsEnum: factory,
            IsInteger: factory,
            IsNested: factory,
            IsNumber: factory,
            IsString: factory,
            IsUUID: factory,
        }]);

        expect(factories).toBeDefined();
        expect(Object.keys(NOOP_DECORATORS)).toEqual(Object.keys(factories));

        Object.values(factories).forEach(
            (item) => {
                const decorator = (item as unknown as PropertyDecoratorFactory<unknown>)({});
                spy.mockReset();
                decorator({}, '');
                expect(spy).toHaveBeenCalled();
            },
        );

        const { IsString } = factories;

        class Example {
            @IsString({
                optional: true,
            })
            foo?: string;
        }

        const example = new Example();
        expect(example).toEqual({});
    });
});
