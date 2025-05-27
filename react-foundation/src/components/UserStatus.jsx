const UserStatus = ({loggedIn, isAdmin}) => {
  if(loggedIn && isAdmin){
    return <p>Welcome Admin</p>
  }
  else {
    return <p>Welcome User</p>
  }
}

export default UserStatus