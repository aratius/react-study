/* Redux単体の動きを確認するためのapp
https://qiita.com/TsutomuNakamura/items/2ded5112ca5ded70e573
 */

 import { applyMiddleware, createStore } from 'redux'

 //reducer
 const reducer = (state = 0, action)=> {
   switch(action.type) {
      case "INC":
        state += 1;
        break;
      case "DEC":
        state -= 1;
        break;
   }
   return state;
 }

 const logger = (store) => (next) => (action) => {
   console.log("action fired", action);
   next(action);  //Reducerにバトンパス
 }
 const middleware = applyMiddleware(logger);

 //初期値を設定するためにReducerを最初に一回呼び出す
 const store = createStore(reducer, 1, middleware);  //middlewareは第三引数に指定する

//storeに変更があった時に呼ばれる？
 store.subscribe(()=> {
   console.log("store changed", store.getState());
 })

 window.onclick = ()=>{
   store.dispatch({type: "INC"})
 }