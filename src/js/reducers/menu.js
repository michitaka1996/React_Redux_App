import _ from 'lodash';


//reducers
 //reducerはreturnで返却するstateと

console.log('reducers(menu): このreducer名が以降でstateの名前になります'); //最初だけ読みこまれる

//初期値のid
const initialState = {
    menus: [{
        id: 'XXX',
        text: 'gegeqwgregqgegrergqs',
        degree: 'AAA',
        isDone: false,
        date: 'YYY'
    }]
};
console.log('reducers: 初期値', initialState); //最初だけ読みとこまれる


//componentsから、dispachでactionsへメソッドを受け渡す
  //常にreducersではactionsが入ってくること
//(actionsは、componentsから送られたメソッドを受け取る)
//action で受け取った値を state に適用して更新する
// reducerはreturnで返却するstateと元のstateの差分があれば、再描画される
// reducer名がそのままstateの名前になる  (このコンポーネントのstateの情報ということ)
export default function menu(state = initialState, action) {
    console.log('reducers: reducersです');
    console.log('reducers: menuの内容', menu);
    //結果  stateとactionが入っている
        //var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        //var action = arguments[1];
    
    switch (action.type) {
        case 'ADD':
            return {
                menus: [
                    ...state.menus,
                    {
                        id: action.id,
                        isDone: false,
                        text: action.text,
                        degree: action.degree,
                        date: action.date
                    }
                ]
            };
        case 'DELETE':
            return Object.assign({}, state, {
                menus: _.reject(state.menus, {'id': action.id})
            })
        case 'UPDATE':
            return Object.assign({}, state, {
                menus: state.menus.map((menu) => {
                    if (menu.id === action.id) {
                        return Object.assign({}, menu, {
                            text: action.text
                        })
                    }
                    return menu
                })
            });
        case 'TOGGLE_DONE':
            return Object.assign({}, state, {
                menus: state.menus.map((menu) => {
                    if (menu.id === action.id) {
                        return Object.assign({}, menu, {
                            idDone: !menu.isDone
                        })
                    }
                    return menu  
                })
            });
       
        default:
            return state; //当たり前だが、default値も設定させないとreducersを返せないようになる
    }
}
console.log('reducers抜けました。これからstoreに渡します。');