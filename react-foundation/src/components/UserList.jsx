const UserList = () => {
    const users = [
        {id: 1, name: "Gustavo", age: 33},
        {id: 2, name: "Pablo", age: 32},
        {id: 3, name: "Juan", age: 31}
    ];

  return (
    <div>
        {users.map(({id, name, age}) => (
            <div key={id}>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        ))}
    </div>
  )
}

export default UserList