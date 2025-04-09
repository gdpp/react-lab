# Custom Color Palette Generator

## Description

Create a **React app** where users can generate custom color palettes (in hex format), add colors manually or randomly, and save them in localStorage. Each color can be copied to the clipboard, and there will be a feature to "lock" colors. There will also be a preview mode that displays how the colors look together, managed directly by the components.

## Checklist

### Components (Functional Components):

- [x] Create Layout Component to englobe styles.
- [ ] Create a main App component to manage the palette state.
- [ ] Create a ColorInput component for adding colors manually.
- [ ] Create a ColorList component to display the list of colors in the palette.
- [ ] Create a ColorItem component for each individual color.
- [ ] Use JSX to structure the components.
- [ ] Pass props from the parent component (App) to its children (ColorList, ColorItem, etc.).
- [ ] Implement component composition (e.g. ColorList will contain multiple ColorItem components).

### Rendering:

- [ ] Render a list of colors using map with unique keys for each element.
- [ ] Use conditional rendering to show a message if the palette is empty ("No colors yet").
- [ ] Implement a "preview mode" that displays the colors in a different layout when active.
- [ ] Use refs to focus the color input field after adding a new color.
- [ ] Handle events like button clicks (generate random, copy, lock).

### Hooks:

- [ ] Use useState to manage the palette state (an array of objects with color value, id, and "locked" status).
- [ ] Use useState to toggle the "preview mode".
- [ ] Use useEffect to load the palette from localStorage when the app starts.
- [ ] Use useEffect to save the palette to localStorage whenever it changes.

### JavaScript/Typescript:

- [ ] Declare variables to store the palette and form state.
- [ ] Use conditionals (if) to validate that entered colors are valid hexadecimal values.
- [ ] Implement a loop (for or map) to apply dynamic styles to the colors.
- [ ] Create a generateRandomColor function that returns a random hexadecimal color.
- [ ] Use scope correctly to avoid conflicts between variables.

### Browser APIs:

- [ ] Use localStorage to save the palettes between sessions.
- [ ] Implement the Clipboard API to copy a color’s hexadecimal value to the clipboard.

### Extras:

- [ ] Add a feature to "lock" colors (so they aren’t overwritten when generating random colors).
- [ ] Ensure the design is visually appealing (use the colors as the background for each ColorItem).
- [ ] Validate that no invalid or duplicate colors are added.
