import { IsString, applyTransformer, withDeprecationWarnings } from '..';

describe('warnIfDeprecated', () => {
    it('produces new decorator factories', () => {
        const onWarning = jest.fn();

        const IsStringWithDeprecationWarning = applyTransformer(
            IsString,
            withDeprecationWarnings(onWarning),
        );

        class Example {
            @IsStringWithDeprecationWarning({
                deprecated: true,
            })
            foo!: string;

            @IsStringWithDeprecationWarning({
            })
            bar!: string;
        }

        const example = new Example();
        example.foo = 'warning expected';
        example.bar = 'no warning expected';

        expect(onWarning).toHaveBeenCalledTimes(1);
        expect(onWarning).toHaveBeenCalledWith('Example.foo is deprecated.');
    });
});
