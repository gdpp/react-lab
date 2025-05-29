import BasicEffect from "./components/BasicEffect"
import CounterEffect from "./components/CounterEffect"
import FetchDataEffect from "./components/FetchDataEffect"
import UserProfile from "./components/UserProfile"
import { UserProvider } from "./components/UserContext"
import UpdateUser from "./components/UpdateUser"
import CountReducer from "./components/CountReducer"
import FocusInput from "./components/FocusInput"
import Timer from "./components/Timer"
import useFetch from "./useFetch"


const App = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <UserProvider>
            <BasicEffect />
            <CounterEffect />
            <FetchDataEffect />
            <UserProfile />
            <UpdateUser />
            <CountReducer />
            <FocusInput />
            <Timer />
            {
                data && 
                data.map((itm) => {
                    return <p key={itm.id}> {itm.title.toUpperCase()} </p>
                })
            }

        </UserProvider>
    )
}

export default App