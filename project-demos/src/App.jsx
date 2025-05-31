import Counter from "./components/counter/Counter"
import Todo from "./components/todo/Todo"
import Meals from "./components/Meals"
import ToggleBackgroundColor from "./components/ToggleBackgroundColor"
import HiddenSearchBar from "./components/HiddenSearchBar"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div>
      <Counter />
      <Todo />
      <Meals />
      <ToggleBackgroundColor />
      <HiddenSearchBar />
      <Testimonials />
    </div>
  )
}

export default App