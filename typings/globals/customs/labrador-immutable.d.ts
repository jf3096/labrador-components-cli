declare namespace LabradorImmutable {
    class Component<P,S> {
        protected props: P;
        public state: S;

        protected onUpdate(props: P);

        protected update();

        protected setState(newState: S, callback?: Function);

        protected constructor(props: P);
    }
}

declare module "labrador-immutable" {
    export = LabradorImmutable;
}