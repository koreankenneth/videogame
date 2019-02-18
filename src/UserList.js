import React from 'react'

const UserList = (props) => {
  return (
    <div>
      <ol>
        {props.users.map((user) => (
          <li key={user.userid} >{user.userid} ({props.checkbox ? '*' : user.games.length} games played)</li>
        ))}
      </ol>
    </div>
  )
}

export default UserList
