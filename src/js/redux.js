/* Redux単体の動きを確認するためのapp
https://qiita.com/TsutomuNakamura/items/2ded5112ca5ded70e573
 */

 import { applyMiddleware, createStore } from 'redux'
 import { createLogger } from 'redux-logger'

 //reducer
 const reducer = (state = 0, action)=> {
   state += 1;
   return state;
 }

 const middleware = applyMiddleware(createLogger());
 const store = createStore(reducer, middleware);

 store.dispatch({type: "FOO"});