import {useState, useEffect} from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count])

    return (
        <div>
            <h4> {count} </h4>
            <button onClick={() => setCount(count + 1)}>Increment 1</button>
        </div>
    )
}

export default CounterEffect