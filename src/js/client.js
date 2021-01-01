import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from './modules/app'
import MemoStore from './modules/store'

//表示をレンダリング
ReactDOM.render(
  //Provider内部のコンポーネントにstoreの情報が渡される
  <Provider store={MemoStore}>
    <App />
  </Provider>,
  document.getElementById('app')
)