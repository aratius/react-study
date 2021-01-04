/* Redux単体の動きを確認するためのapp
https://qiita.com/TsutomuNakamura/items/2ded5112ca5ded70e573
 */

 import { combineReducers, createStore } from 'redux'

 //reducer
 const userReducer = (state = {}, action)=> {
   switch(action.type) {
      case "CHANGE_NAME":
        state = {...state, name: action.payload};
        break;
      case "CHANGE_AGE":
        state = {...state, age: action.payload};
        break;
   }
   return state;
 }

 const tweetsReducer = (state = [], action)=> {
   switch(action.type) {
      case "ADD_TWEET":
        state = state.concat({id: Date.now(), text: action.payload});
   }
   return state;
 }

 //複数Reducerを統合
 const reducers = combineReducers({
   user: userReducer,
   tweets: tweetsReducer
 })
 
 //初期値を設定するためにReducerを最初に一回呼び出す
 const store = createStore(reducers);

//storeに変更があった時に呼ばれる？
 store.subscribe(()=> {
   console.log("store changed", store.getState());
 })

 //user
 store.dispatch({type: "CHANGE_NAME", payload: "ARATA"})
 store.dispatch({type: "CHANGE_AGE", payload: 20})

//tweet
store.dispatch({type: "ADD_TWEET", payload: "HELLO ARATA"})