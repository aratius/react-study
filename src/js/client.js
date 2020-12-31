import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './modules/app'

//ステートの値
let state_value = {
  counter: 0,
  message: 'count'
}

//レデューサー
function counter(state = state_value, action) {
  console.log(state_value);
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: 'INCREMENT'
      };
      case 'DECREMENT':
        return {
          counter: state.counter - 1,
          message: 'DECREMENT'
        }
      default:
        return state;
  }
}


//ストア作成
let store = createStore(counter);

//表示をレンダリング
ReactDOM.render(
  //Provider内部のコンポーネントにstoreの情報が渡される
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)