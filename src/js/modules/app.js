import React from 'react'
import { connect } from 'react-redux' 

import Message from './message'
import Button from './button'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    )
  }
}

//ストアのコネクト
App = connect()(App);