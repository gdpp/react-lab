# React Practice Checkpoint 1: Mini Projects with JavaScript

1. Profile Component with Props and Conditionals

Topics: Components, JSX, JSX Rules, Props, Prop Destructuring, Conditional Rendering, Styles (Tailwind)

Instructions:
Create a component called UserProfile that receives name, age, and isOnline as props.Render the name and age.If isOnline is true, show a green-styled message that says "Online"; otherwise, show a red message that says "Offline".Style the component using Tailwind.

2. Task List with useState and Events

Topics: useState, Events, List of Data, Dynamic Content

Instructions:
Create a component called TaskList.Allow the user to add tasks via an input field.Display the tasks in a dynamic list.Each task should have a delete button.Clear the input after adding a task.

3. Modal with Portal and useRef

Topics: Portal, useRef, Props Children

Instructions:
Create a component Modal rendered inside a portal (#modal-root).Use useRef to close the modal when clicking outside the content.Receive content through children as a prop.Add a button to open and close the modal.

4. Image Gallery with Conditional Rendering

Topics: Conditional Rendering, List of Data, Dynamic Content, Events

Instructions:
Create a component ImageGallery that renders a list of images.When the user clicks on an image, it should be shown in a larger view.If no image is selected, display the message "Select an image".

5. Counter with Dynamic Styles

Topics: useState, Events, Styles (Tailwind or DaisyUI)

Instructions:
Create a component Counter.It should have buttons to increase and decrease the value.The number should change color depending on its value: green if positive, red if negative, and gray if zero.Style the component using Tailwind or DaisyUI.

# React Practice Checkpoint 2: React Exercises with TypeScript

1. Contact Form with React Hook Form and Tailwind

Topics: react-hook-form, React with TypeScript, Tailwind

Instructions:
Create a form using react-hook-form with fields for name, email, and message.Validate that all fields are required.On submission, display the data in the console.Style it with Tailwind or ShadCN.

2. Global Counter with Context API and useReducer

Topics: Context API, useReducer, useState, Advanced Keys, React with TypeScript

Instructions:
Create a global context to manage a counter (count).Allow incrementing, decrementing, and resetting the counter.Use useReducer to handle the actions.Add multiple buttons with unique keys.Create a component that consumes the context and displays the counter value.

3. User List with Dynamic Data and useEffect

Topics: useEffect, useId, Dynamic Content, Prop Destructuring, React with TypeScript

Instructions:
Create a component UserList that fetches data from a fake API (e.g., https://jsonplaceholder.typicode.com/users).Display a list showing the name and email of each user.Each item should use useId as the key.Use useEffect to fetch the data when the component mounts.

4. Tabs Component with Children and useRef

Topics: Props Children, useRef, JSX Rules, React with TypeScript

Instructions:
Create a component Tabs that allows switching between different content sections.Each section is passed as children.Use useRef to focus the active tab.Style it with Tailwind or Radix.

5. Custom Timer Hook

Topics: Custom Hooks, useEffect, useState, React with TypeScript

Instructions:
Create a custom hook useTimer that starts an ascending counter from zero.The timer should start when the component mounts and stop when it unmounts.Create a component that uses this hook to display the elapsed time.



