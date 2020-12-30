import React from 'react'

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.children);
  }
  
  render () {
    return (
      <div>hello</div>
    )
  }
}