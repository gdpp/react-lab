const ComponentOne = ({counter, onClickHandler}) => {

    const handleClick = () => onClickHandler()

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default ComponentOne