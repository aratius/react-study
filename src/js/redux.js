/* Redux単体の動きを確認するためのapp
https://qiita.com/TsutomuNakamura/items/2ded5112ca5ded70e573
 */

 import { applyMiddleware, createStore } from 'redux'
 import { createLogger } from 'redux-logger'
 import promise from 'redux-promise-middleware'
 import axios from 'axios'

 //reducer
 const initalState = {
   fetching: false, 
   fetched: false,
   users: [],
   error: null
 }

 const reducer = (state = initalState, action)=> {
   switch(action.type) {
    case "FETCH_USERS_PENDING":  //処理中
      return {...state, fetching: true};
    case "FETCH_USERS_FULFILLED":  //処理完了
      return {...state, fetching: false, fetched: true, users: action.payload};
    case "FETCH_USERS_REJECTED":  //エラー
      return {...state, fetching: false, error: action.payload};
   }
   return state;
 }

//  redux-thunkはactionの代わりに非同期処理を渡して、それが終わった後に通常の同期処理アクションをdispatchできるようにするためのやつ
const middleware = applyMiddleware(promise, createLogger());
const store = createStore(reducer, middleware);

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://localhost:18080")
})


 //ダミーサーバ
/*  $ node << EOF
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  setTimeout(() => res.end('{age: 30, id: 0, name: "foo", age: 25, id: 1, name: "bar"}'), 1000);
}).listen(18080);
EOF */
