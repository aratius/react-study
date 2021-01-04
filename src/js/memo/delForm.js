import React from 'react'
import { connect } from 'react-redux'
import { deleteMemo } from './store'

class DelForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      number: e.target.value
    })
  }

  doAction(e) {
    //このイベントが持つデフォルトの動作をキャンセル
    e.preventDefault()
    //アクションを作成
    let action = deleteMemo(this.state.number)
    //Reducerにdispatch
    this.props.dispatch(action)
    this.setState({
      number: 0
    })
  }
  
  render () {
    let n = 0
    //繰り返し要素を作成するときはkey属性が必要
    let items = this.props.data.map((value) => (
      <option key={n} value={n++}>{value.message.substring(0, 10)}</option>
    ))
    return (
      <div>
        <form onSubmit={this.doAction}>
          <select onChange={this.doChange} defaultValue="-1">
            {items}
          </select>
          <input type="submit" value="Del" />
        </form>
      </div>
    )
  }
}

export default connect((state) => state)(DelForm)