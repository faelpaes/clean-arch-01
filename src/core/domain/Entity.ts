export abstract class Entity<T> {
    protected _id: string;
    props: T;

    constructor(props: T, id?: string) {
        this.props = props;
    }
}