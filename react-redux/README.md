# Redux, React Redux and Redux Toolkit

This section serves as an introduction to state management in React using Redux, React Redux, and Redux Toolkit.

Redux is a predictable state container for JavaScript applications. It helps manage and centralize application state in a consistent way. With the help of React Redux and Redux Toolkit, integrating Redux into React becomes more efficient, readable, and less verbose.

Redux Toolkit is the official, recommended way to write Redux logic. It offers a modern approach to writing reducers, actions, and even slices of your store, with less boilerplate and best practices built-in.

## Covered Topics
1. Redux Core
   - What is Redux?
   - Store
   - Actions
   - Reducers
   - Immutable state
   - Pure functions

2. React Redux
   - Provider setup
   - useSelector to access state
   - useDispatch to send actions
   - Connecting components to the store

3. Redux Toolkit (RTK)
   - configureStore for store setup
   - createSlice for reducers + actions
   - createAsyncThunk for handling side effects
   - Simplified immutable updates with Immer

4. RTK best practices
   - Architecture & Patterns
   - Organizing slices and features
   - Combining reducers
   - Handling global vs local state
   - Using Redux DevTools for debugging

5. Extras
   - Middleware basics
   - Redux with TypeScript

## What I Learned

In this section, I learned the fundamentals of state management using Redux, how to integrate it into a React application with React Redux, and how Redux Toolkit simplifies the entire process. I now understand the core concepts of Redux such as the store, actions, and reducers, as well as the principles that make Redux predictable and reliable. I explored how to connect React components to the Redux store using the Provider, useSelector, and useDispatch hooks. With Redux Toolkit, I learned how to create slices to streamline action and reducer creation, and how to handle asynchronous logic using createAsyncThunk. I also gained insight into organizing scalable Redux architecture, integrating middleware and Redux DevTools, and following best practices to keep code maintainable and efficient.