export interface PropertyDecoratorFactory<Options> {
    (options: Options): PropertyDecorator;
}
