In this section, we’ll start working with React in a more structured way — one that allows us to build scalable projects and move beyond the idea that components should only be small, reusable, and easy to test.

We’ll specifically cover:

- HTTP requests
- Debounce techniques
- State management
- Component communication
- useEffect
- Environment variables
- Custom fonts
- Custom Hooks
- React DevTools
- useRef: Hook React
- Generate production version
- Responsibility Separations

The main goal is to establish a solid foundation for building React applications that can grow, scale, and reuse code efficiently over time.

## Event handlers in React.

| Sintaxis             | Qué hace                          | Cuándo usar                                    |
| -------------------- | --------------------------------- | ---------------------------------------------- |
| onClick={fn}         | Pasa la referencia a una función  | Cuando no necesitas argumentos                 |
| onClick={() => fn()} | Crea una función que llama a fn() | Cuando necesitas argumentos o lógica adicional |
| onClick={fn()}       | Ejecuta fn() inmediatamente       | ❌ Solo si fn() devuelve otra función          |

## Problems Solved by Custom Hooks

Custom hooks in React solve several common problems:

- Logic reuse: They prevent duplicating complex state or effect logic across multiple components.
- Separation of concerns: They isolate business logic from the UI layer, making components more focused on rendering.
- Improved readability and maintenance: Code becomes easier to understand, refactor, and maintain.
- Easier testing: You can test the logic of a hook independently, without rendering a component.
- Composable behavior: You can combine multiple custom hooks to build more advanced features without deep component hierarchies.
