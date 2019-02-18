import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser'
import UserListTable from './UserListTable'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/


class App extends Component {
  state = {
    users:[
      {
        userid:"nelo13",
        firstname : "Keehoon",
        lastname : "Kim",
        games : ["Clash of Clans", "Brawl Starts"]
      },
      {
        userid:"koreankenneth",
        firstname : "Kenneth",
        lastname : "Kim",
        games : ["Lineage", "Free Style"]
      },
      {
        userid:"pyj0416",
        firstname : "Youjeong",
        lastname : "Park",
        games : []
      }
    ]
  }

  addUser = (user) => {
    this.setState({users:[...this.state.users,user]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser 
          addUser={this.addUser} 
          users={this.state.users} 
        />
        <UserListTable users={this.state.users} />
      </div>
    );
  }
}

export default App;
