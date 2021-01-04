import { createStore } from 'redux'

const initData = {
  data: [{message: 'sample data' , created: new Date()}],
  message: 'please type message',
  mode: 'default',
  fdata: []
};


//Reducer
//Reducer内で最終的にreturnしたものが新しいステートになる？
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    default:
      return state;
  }
}

//for add memo
function addReduce(state, action) {
  let data = {
    message: action.message,
    created: new Date()
  };

  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data: newdata,
    message: 'Added',
    mode: 'default',
    fdata: []
  }
}

//for find memo
function findReduce(state, action) {
  let f = action.find;
  let fdata = []
  state.data.forEach((value) => {
    //文字が一致するものがあればfdata配列に格納(元に戻れなくなるのでdataは汚染しない)
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  })
  return {
    data: state.data,
    message: 'find "' + f + '":',
    mode: 'find',
    fdata: fdata
  }
}

//for delete memo
function deleteReduce(state, action) {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data: newdata,
    message: 'delete"' + action.index + '":',
    mode: 'delete',
    fdata: []
  }
}

//actionCreator for memo
export function addMemo(text) {
  return {
    type: 'ADD',
    message: text
  }
}

//actionCreator for delete
export function deleteMemo(num) {
  return {
    type: 'DELETE',
    index: num
  }
}

//actionCreator for find
export function findMemo(text) {
  return {
    type: 'FIND',
    find: text
  }
}

//create store
export default createStore(memoReducer);