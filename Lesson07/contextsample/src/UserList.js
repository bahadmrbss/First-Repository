import React, { useContext } from 'react'
import User from './User'
import { UserContext } from './context/UserContext'

function UserList() {
   // console.log("UserList Props", changeColor,users)
   const {users} = useContext(UserContext)
  // console.log("User List Comp. Data:", contextData)
  return (
    <div>UserList
        {/* <User changeColor={changeColor} user={users[0]}/> */}
        {users.map((user)=>(
            <User key={user.id} user={user}/>
        ))}
    </div>
  )
}

export default UserList