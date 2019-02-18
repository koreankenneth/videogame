import React, { Component } from 'react'

class AddUser extends Component {
  state = {
    userid: '',
    firstname: '',
    lastname: '',
    games : []
  }

  addUser = event => {
    event.preventDefault()
    let isIdValid = true
    this.props.users.forEach(user => {
      if (user.userid === this.state.userid) isIdValid = false
    })
    
    isIdValid ? this.props.addUser(this.state) : alert('The UserID already exists.')
  }

  handleChange = event => {
    const value = event.target.value
    const name = event.target.name
    this.setState({ [name] : value })
  }

  render () {
    return (
      <div>
        <form>
          <input
            type='text'
            name='userid'
            placeholder='User ID'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='firstname'
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='lastname'
            placeholder='Last Name'
            onChange={this.handleChange}
          />
          <button 
            onClick={this.addUser}
            disabled={this.state.userid === '' || this.state.firstname === '' || this.state.lastname === ''}
          >
            Add
          </button>
        </form>
      </div>
    )
  }
}

export default AddUser
