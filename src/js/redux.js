/* Redux単体の動きを確認するためのapp
https://qiita.com/TsutomuNakamura/items/2ded5112ca5ded70e573
 */

 import { createStore } from 'redux'

 //reducer
 const reducer = (state = 0, action)=> {
   switch(action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
   }
   return state;
 }

 //初期値を設定するためにReducerを最初に一回呼び出す
 const store = createStore(reducer, 1);

//storeに変更があった時に呼ばれる？
 store.subscribe(()=> {
   console.log("store changed", store.getState());
 })

 store.dispatch({type: "INC", payload: 100});
 store.dispatch({type: "DEC", payload: 100})