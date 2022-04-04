export type MandatoryPropertyDecoratorFactory<Options> = {
    (options: Options): PropertyDecorator;
};

export type OptionalPropertyDecoratorFactory<Options> = {
    (options?: Options): PropertyDecorator;
};

// eslint-disable-next-line max-len
export type PropertyDecoratorFactory<Options> = MandatoryPropertyDecoratorFactory<Options> | OptionalPropertyDecoratorFactory<Options>;
