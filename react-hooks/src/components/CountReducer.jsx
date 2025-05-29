import { useState, useReducer } from "react";

import { initialState, counterReducer } from "../counterReducer"

const CountReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => dispatch({type: "INCREMENT"})
    const handleReset = () => dispatch({type: "RESET"})
    const handleDecrement = () => dispatch({type: "DECREMENT"})
    
    const handleIncrementByAmount = () => { 
        dispatch({type: "INCREMENT_BY_AMOUNT", payload: Number(inputValue)})
        setInputValue(0)
    }
    const handleDecrementByAmount = () => { 
        dispatch({type: "DECREMENT_BY_AMOUNT", payload: Number(inputValue)})
        setInputValue(0)
    }

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={handleIncrement}>Increment 1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement 1</button>

            <div>
                <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button onClick={handleIncrementByAmount}>Add</button>
                <button onClick={handleDecrementByAmount}>Substract</button>
            </div>
        </div>
    )
}

export default CountReducer