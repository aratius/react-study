import React from 'react'
import { connect } from 'react-redux'

export default class Button extends React.Component {

  constructor (props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  doAction (e) {
    if (e.shiftKey) {
      this.props.dispatch({ type: 'DECREMENT'});
    }else {
      this.props.dispatch({ type: 'INCREMENT' });
    }
  }
  
  render () {
    return (
      <button onClick={this.doAction}>click</button> 
    )
  }
}

//ストアのコネクト
Button = connect() (Button);