import { useState, useEffect } from "react"

const FetchDataEffect = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json();

            if(data && data.length) setData(data)
        }

        getData()
    }, [])

    return (
        <div>
            <ul>
                {data.map(item => (
                    <section key={item.id}>
                        <li>{item.title}</li>
                    </section>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataEffect