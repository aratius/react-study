import React from 'react'
import { connect } from 'react-redux'
import { addMemo } from './store'

class AddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange (e) {
    this.setState({
      message: e.target.value
    })
  }
  
  doAction(e) {
    e.preventDefault();
    //アクションを作成
    let action = addMemo(this.state.message);
    //アクションを引数にReducerのdispatchを実行
    this.props.dispatch(action);
    this.setState({
      message: ''
    })
  }
  
  render () {
    return (
      <div>
        <p>{this.props.message}</p>
        <form onSubmit={this.doAction}>
          <input type="text" size="40" onChange={this.doChange} value={this.state.message} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default connect((state) => state)(AddForm)