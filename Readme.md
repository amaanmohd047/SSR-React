# Server Side Rendered React(Calculator)

In this projects, I experimented with the ReactDOM library and made my own ssr react proof of concept. It is only a calculator though. It helped me develop good understanding on how the SSR React Frameworks like Next.js, Remix, etc, work behind the scene.

# Installation

```
$ git clone https://github.com/amaanmohd047/SSR-React.git
$ npm install 
$ npm run dev
```

### How does this work?

On Server, we use babel to parse the JSX code. And then we use

```
ReactDOM.renderToString(<Component />);
```

method to paint the react component on the DOM.

On Client side, the react tree should be exactly the same as the react tree from the server and then using

```
ReactDOM.hydrateRoot()
```

 method, we can hydrate the static HTML served by the server to add interactivity to the page.

This leads to the faster initial load of the page as well as client side interactivity to the page.
