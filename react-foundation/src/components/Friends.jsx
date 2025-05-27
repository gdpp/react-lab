import {useState} from 'react'

const Friends = () => {
    const [friends, setFriends] = useState(["Juan", "Pablo", "Gustavo"])
    
    const addOneFriend = () => setFriends([...friends, 'John'])
    const removeFriend = () => setFriends(friends.filter(f => f !== 'John'))

    return (
        <div>
            <h1>List of people:</h1>
            <ul>
                {friends.map(fri => (
                    <li key={Math.random()}>{fri}</li>
                ))}
            </ul>

            <button onClick={addOneFriend}>Add New Friend </button>
            <button onClick={removeFriend}>Remove Friend </button>
        </div>
    )
}

export default Friends