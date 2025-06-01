import AdminInfo from "./components/AdminInfo"
import Button from "./components/Button"
import User from "./components/User"
import UserInfo from "./components/UserInfo"

import type { Info, AdminInfoList } from "./Types"

const user: Info = {
  id: 1,
  name: 'Gustavo',
  email: 'gustavo@test.com'
}

const admin : AdminInfoList = {
  id: 2,
  name: 'Leslie',
  email: 'leslie@test.com',
  role: 'admin',
  lastLogin: new Date()
}

const App = () => {
  return (
    <div>
      <User name="Gustavo" age={33} isStudent={true} />
      <Button label="Send" onClick={() => {console.log('clicked!')}} disabled={false} />
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  )
}

export default App
