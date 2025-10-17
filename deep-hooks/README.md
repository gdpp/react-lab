# Deep Hooks understanding

This project is designed to strengthen your understanding of traditional React hooks and take it a step further by introducing custom hooks.

I’ll not only review the core hooks that power React’s state and lifecycle management, but also learn how to build your own reusable hooks to simplify logic and improve code organization.

Specifically, we’ll cover:

useState – Managing component state effectively
useRef – Referencing DOM elements and preserving mutable values
useEffect – Handling side effects and data synchronization

- Memorización
- Hooks de memorización como:
  - useMemo
  - useCallback
- useOptimistic para hacer actualizaciones en pantalla rápidas
- useTransaction para evitar bloqueos de UI
- Simular fallos en posteos optimistas para hacer reversiones
- Nueva api Use
- Componente Suspense
- Reducer patter
- useReducer hook
- Zod
- Effects over states
- LocalStorage y SessionStorage
- Reducers conditions

Custom Hooks, such as:
useCounter – Managing counters with reusable logic
usePokemon – Fetching and managing API data
useTrafficLight – Modeling reactive state machines or timers

Connecting multiple custom hooks together to create more complex behavior

By the end, you’ll have a solid foundation for creating modular, reusable, and scalable React hooks that make your components cleaner and easier to maintain.

## Best Practices for useEffect

#### 1. Think “synchronization,” not “lifecycle”

Use useEffect to synchronize your component with external systems (APIs, storage, events, etc.), not to mimic class lifecycle methods like componentDidMount or componentDidUpdate.

#### 2. Always declare correct dependencies

Everything used inside the effect that comes from outside its scope (state, props, functions, etc.) should be listed in the dependency array.
Do not ignore the linter warnings — they help prevent subtle bugs and stale values.

#### 3. Avoid unnecessary effects

Before writing an effect, ask yourself if you can achieve the same result with plain rendering logic or derived state.
If it’s just a data transformation, it usually belongs in the render flow, not in an effect.

#### 4. Clean up properly

Whenever you add event listeners, intervals, subscriptions, or any external resource, make sure to clean them up.
The cleanup function prevents memory leaks and ensures your component behaves correctly when unmounted.

#### 5. Split effects by responsibility

Each useEffect should have one clear purpose.
Avoid combining unrelated logic (like updating the document title and fetching data) in the same effect.
Small, focused effects are easier to debug and maintain.

#### 6. Be careful with functions inside effects

Functions created inside an effect are redefined on every render, which can trigger re-execution if they are dependencies.
Use memoized functions (via useCallback) when you need them to remain stable between renders.

#### 7. Avoid infinite dependency loops

If a dependency changes on every render — for example, an inline object or function — your effect will run continuously.
To fix this, memoize such dependencies or move constant values outside the component.

#### 8. Use empty dependency arrays for one-time setup

If something should run only once when the component mounts (like initialization logic), use an empty dependency array.
But make sure the logic truly doesn’t depend on any reactive value.

#### 9. Synchronize with external props or state carefully

When an effect depends on props or state, include only the necessary dependencies.
This ensures that the effect runs exactly when those specific values change, preventing extra renders or loops.

#### 10. Extract custom hooks for repeated effects

If you find yourself repeating the same effect pattern across components, move it into a custom hook.
This keeps your components clean and your logic reusable.
