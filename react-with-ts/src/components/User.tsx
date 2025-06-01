// type User = {
//     name: string, 
//     age: number, 
//     isStudent: boolean
// }

import type { FC } from "react"

interface User {
    name: string, 
    age: number, 
    isStudent: boolean
}

const User : FC<User> = ({name, age, isStudent}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{isStudent}</h2>
    </div>
  )
}

export default User