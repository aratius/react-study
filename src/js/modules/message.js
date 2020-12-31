import React from 'react'
import { connect } from 'react-redux'
import mappingState from './mappingState'

export default class Message extends React.Component {
  render () {
    return (
      <p>
        {this.props.message}: {this.props.counter}
      </p> 
    )
  }
}

//ストアのコネクト
Message = connect(mappingState)(Message)