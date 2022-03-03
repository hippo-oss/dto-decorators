import { buildDecoratorFactories, FACTORIES, PropertyDecoratorFactory } from '..';

describe('buildDecoratorFactories', () => {
    it('produces new decorator factories', () => {
        const noop = () => { };
        const transformer = () => noop;

        const factories = buildDecoratorFactories({
            IsBoolean: transformer,
            IsDate: transformer,
            IsDateString: transformer,
            IsEnum: transformer,
            IsInteger: transformer,
            IsNested: transformer,
            IsString: transformer,
            IsUUID: transformer,
        });

        expect(factories).toBeDefined();
        expect(Object.keys(FACTORIES)).toEqual(Object.keys(factories));

        Object.values(factories).forEach(
            (factory: PropertyDecoratorFactory<unknown>) => {
                const decorator = factory({});
                expect(decorator).toEqual(noop);
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
