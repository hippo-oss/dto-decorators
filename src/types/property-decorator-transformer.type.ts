export interface PropertyDecoratorTransformer<Options> {
    (options: Options, decorator: PropertyDecorator): PropertyDecorator;
}
