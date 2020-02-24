import React, { Component } from 'react'
import ExContainer from './container/ExContainer'

import './App.css'

export default class App extends Component {
  state = {
    balance: 34.23
  }
  render() {
    return (
      <div className='App'>
      
        <ExContainer balance={this.state.balance}/>

      </div>
    )
  }
}
