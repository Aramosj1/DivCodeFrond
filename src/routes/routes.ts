
type JSXComponent = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: JSXComponent;
    name: string;
}