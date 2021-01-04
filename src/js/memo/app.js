import React from 'react'
import { connect } from 'react-redux'
import Memo from './memo'
import AddForm from './addForm'
import FindForm from './findForm'
import DelForm from './delForm'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td><FindForm /></td>
              <td><DelForm /></td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div> 
    )
  }
}