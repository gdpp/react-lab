const Greeting = () => {
    const d = new Date()
    const name = 'John'

    return (
        <div>
            <h1>Good Morning My Friend</h1>
            <p>{d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}</p>
        </div>
    )
}

export default Greeting