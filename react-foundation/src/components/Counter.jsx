import {useState} from 'react'

// Components
import ComponentOne from './ComponentOne'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+ 1</button>
            <button onClick={decrement}>- 1</button>
            <hr />
            <ComponentOne counter={counter} onClickHandler={() => setCounter(counter + 1)} />
        </div>
    )
}

export default Counter