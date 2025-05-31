import { useState } from 'react'

function generateId() {
  return Math.floor(Math.random() * 10);
}

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = () => {

    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: generateId()
      })
    })

    setInput('')
  }

  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className='container'>
      <h1>Todo List</h1>

      <input type="text" placeholder='New Todo' value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>

      <h4>todo's</h4>
      <ul>
        {
          todos.map(({text, id}) => (
            <li key={id}>
              <span> {text} </span>
              <button onClick={() => removeTodo(id)}> X </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todo