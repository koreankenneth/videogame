import React, { Component } from 'react'
import UserList from './UserList'

class UserListTable extends Component {
  state = {
    checkbox: false
  }

  toggleCheckbox = (event) => {
    this.setState({checkbox:event.target.checked})
  }

  render () {
    return (
      <div>
        <div>
          <input 
            type='checkbox'
            onChange={this.toggleCheckbox}
          /> {this.state.checkbox? 'Unhide' : 'Hide'} the number of played games
        </div>
        <UserList 
          users={this.props.users}
          checkbox={this.state.checkbox}
        />
      </div>
    )
  }
}

export default UserListTable
