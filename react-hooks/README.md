# React Hooks

This project is a personal foundational exercise in learning and reinforcing React hooks concepts. It covers essential hooks and custom hooks that are frequently used in modern React applications and serves as a reference point for future development.

## Covered Topics

1. useState
2. useEffect
3. Context API
4. useReducer
5. useRef
6. Custom Hooks
7. useId

#### useState
Adds local state to functional components.

#### useEffect
Runs side effects (e.g., fetch, subscriptions) after render.

#### Context API
Shares global data without prop drilling.

#### useReducer
Manages complex state with action-based logic.

#### useRef
Holds a mutable reference that persists across renders.

#### Custom Hooks
Encapsulate and reuse hook logic across components.

#### useId
Generates unique IDs, useful for accessibility or mapping.

## What I Learned
Manage state with useState:

```jsx
const [count, setCount] = useState(0);
```

Handle side effects using useEffect:

```jsx
useEffect(() => {
  fetchData();
}, []);
```

Share state globally with Context API:

```jsx
const MyContext = createContext();
<MyContext.Provider value={value}>...</MyContext.Provider>
```

Use reducers for advanced state:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Access DOM or persist values with useRef:

```jsx
const inputRef = useRef(null);
```

Create reusable logic with custom hooks:

```jsx
function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return [on, toggle];
}
```

Generate unique IDs with useId:

```jsx
const id = useId();
```