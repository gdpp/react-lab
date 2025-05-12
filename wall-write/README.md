# Mini Wall of Random Ideas

## Description

Build a small **React** app where users can type random ideas and pin them to a _"wall"_. These ideas should be saved in **localStorage**, can be copied to the **clipboard** with a click, and can also be deleted. When there are no saved ideas, show a special message component encouraging the user to add one.

## Checklist

### Components (Functional Components)

- [ ] Create an App component to manage the state of the ideas.
- [ ] Create an IdeaForm component to input new ideas.
- [ ] Create an IdeaList component that receives ideas as props and renders them.
- [ ] Create an IdeaItem component for each individual idea with buttons to copy and delete.
- [ ] Use JSX properly to structure your components.
- [ ] Pass props from the App component to its children (IdeaList, IdeaItem, etc.).
- [ ] Implement component composition (IdeaList contains multiple IdeaItem components).

### Rendering

- [ ] Render a list of ideas using map() with a unique key for each idea.
- [ ] Use conditional rendering to show a message (“No ideas yet”) when the list is empty.
- [ ] Use ref to automatically focus the input field when the app loads or after saving/deleting an idea.
- [ ] Handle events such as onSubmit, onClick, and onChange to add, delete, or copy ideas.
- [ ] Prevent empty ideas from being added.

### Hooks

- [ ] Use useState to manage the list of ideas.
- [ ] Use useState to manage the input content.
- [ ] Use useEffect to load ideas from localStorage when the app starts.
- [ ] Use useEffect to save ideas to localStorage whenever the state changes.
- [ ] Use useRef to handle input field focus.

### JavaScript

- [ ] Declare variables using const and let appropriately.
- [ ] Use conditionals (if, ternaries) for validation or to show messages.
- [ ] Use map() to transform and render the list of ideas.
- [ ] Create functions to:
    - [ ] Add a new idea.
    - [ ] Delete an idea.
    - [ ] Copy an idea to the clipboard.
- [ ] Save/load ideas from localStorage.
- [ ] Use scope properly (avoid unnecessary global variables).

### Browser APIs

- [ ] Use localStorage to persist ideas between sessions.
- [ ] Use the Clipboard API to copy idea text (navigator.clipboard.writeText()).

