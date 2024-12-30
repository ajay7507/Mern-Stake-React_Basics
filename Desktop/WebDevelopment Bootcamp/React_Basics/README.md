# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- Topic of React -->

## How to pass props from parent to child

 <!-- Parent component -->

function ParentComponent() {
const message = "Hello, World!";
return <ChildComponent greeting={message} />;
}

<!-- Child Component   using function component-->

function ChildComponent(props) {
return <h1>{props.greeting}</h1>;
}

<!-- Using Class Component -->

class ChildComponent extends React.Component {
render() {
return <h1>{this.props.greeting}</h1>;
}
}
