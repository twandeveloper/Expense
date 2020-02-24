import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  state = {
    balance: 34.23
  }
  render() {
    return (
      <div className='App'>
        <h1>expense tracker</h1>
        <br/>
        <h2>Balance</h2>
        <h3>$ {this.state.balance}</h3>
        <br/>
        <h3>income and expense Component</h3>
        <br/>
        <h3>history component</h3>
        <br/>
        <h3>add income or expense</h3>
      </div>
    )
  }
}
