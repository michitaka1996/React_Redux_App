//これはreducerを統括するためのコンポーネント
  //ここで実際にreducerを作っている


import { combineReducers } from 'redux'
import menu from './menu'


const reducer = combineReducers({
    menu
});



export default reducer;