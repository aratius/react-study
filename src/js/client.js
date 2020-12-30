import React from "react";
import ReactDOM from "react-dom";

import Message from './modules/message'

class Layout extends React.Component {
  render() {
    return (
      <Message>
        <p>こんにちは</p>
        <div>ディブです</div>
      </Message>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);