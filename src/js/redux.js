/* Redux単体の動きを確認するためのapp
https://qiita.com/TsutomuNakamura/items/2ded5112ca5ded70e573
 */

 import { applyMiddleware, createStore } from 'redux'
 import { createLogger } from 'redux-logger'
 import thunk from 'redux-thunk'
 import axios from 'axios'

 //reducer
 const reducer = (state = 0, action)=> {
   switch(action.type) {
    case "FETCH_USERS_START":
      break;
    case "RECIEVE_USERS":
      break
    case "FETCH_USERS_ERROR":
      break;
   }
   return state;
 }

//  redux-thunkはactionの代わりに非同期処理を渡して、それが終わった後に通常の同期処理アクションをdispatchできるようにするためのやつ
 const middleware = applyMiddleware(thunk, createLogger());
 const store = createStore(reducer, middleware);

 store.dispatch((dispatch) => {
   dispatch({type: "FETCH_USERS_START"})

   //非同期処理ここから
   axios.get("http://localhost:18080").then((response)=> {
     dispatch({type: "RECIEVE_USERS", payload: response.data})
   }).catch((err)=> {
     dispatch({type: "FETCH_USERS_ERROR", payload: err})
   })
 })

 //ダミーサーバ
/*  $ node << EOF
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  setTimeout(() => res.end('{age: 30, id: 0, name: "foo", age: 25, id: 1, name: "bar"}'), 1000);
}).listen(18080);
EOF */
