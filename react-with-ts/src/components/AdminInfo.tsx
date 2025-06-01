import type { FC } from "react"
import type { AdminInfoList } from "../Types"

type AdminInfoProps = {
    admin: AdminInfoList
}

const AdminInfo: FC<AdminInfoProps> = ({admin}) => {
  return (
    <div>
        <h2> Admin Information: </h2>
        <p>id: {admin.id}</p>
        <p>name: {admin.name}</p>
        <p>email: {admin.email}</p>
        <p>role: {admin.role}</p>
        <p>last login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo