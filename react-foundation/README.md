# React Foundation

This project is a personal foundational exercise in learning and reinforcing core React concepts. It covers essential topics that are frequently used in modern React applications and serves as a reference point for future development.

## Covered Topics

1.  Components
2.  JSX
3.  JSX Rules
4.  Multiple Components
5.  Dynamic Content
6.  List of Data
7.  Props
8.  Prop Destructuring
9.  Props Children
10. Conditional Rendering
11. Styles
12. Events
13. State
14. Portal
15. Advance Keys


#### Components
The building blocks of any React app. Understanding the difference between functional and class components was key.

#### JSX
JSX allows writing HTML-like syntax directly within JavaScript, making UI declaration more intuitive.

#### JSX Rules
Practiced the syntactical rules of JSX such as returning a single parent element, using className instead of class, and properly closing tags.

#### Multiple Components
Learned how to create modular UIs by splitting the interface into multiple reusable components.

#### Dynamic Content
Used expressions inside JSX to render dynamic values based on variables or functions.

#### List of Data
Iterated over arrays using .map() to render lists efficiently.

#### Props
Passed data from parent to child components to make them more flexible and dynamic.

#### Prop Destructuring
Improved code readability by using destructuring inside function parameters or component bodies.

#### Props Children
Learned how to pass and render nested elements between opening and closing component tags using props.children.

#### Conditional Rendering
Displayed different elements or components based on certain conditions using logical operators and ternary expressions.

#### Styles
Applied inline styles, CSS classes, and style objects to React components.

#### Events
Handled user interactions using React’s event system, such as onClick and onChange.

#### State
Used the useState hook to handle component state and trigger UI updates.

#### Portal
Rendered components outside the main DOM tree using ReactDOM.createPortal, useful for modals or overlays.

#### Advanced Keys
Understood how to assign stable and unique keys when rendering dynamic lists to avoid rendering issues.

## What I Learned
React components can be simple functions:

```jsx
const Greeting = () => <h1>Hello, world!</h1>;
```

JSX allows embedding expressions:

```jsx
const name = "Maple";
const message = <h2>Welcome, {name}!</h2>;
```

State and events make components interactive:

```jsx
const [count, setCount] = useState(0);
```

`props.children` lets you create wrapper components like layouts or cards.

Portals are useful for rendering elements like modals outside the root DOM node.
