import _ from 'lodash';


//これがreducers自身
 //storeに渡すもの


//reducerはreturnで返却するstateと



//初期値のid
const initialState = {
    menus: [{
        id: 'XXX',
        text: 'gegeqwgregqgegrergqs',
        isDone: false
    }]
};
console.log('初期値', initialState);


//componentsから、dispachでactionsへメソッドを受け渡す
  //常にreducersではactionsが入ってくること
//(actionsは、componentsから送られたメソッドを受け取る)
//action で受け取った値を state に適用して更新する
// reducerはreturnで返却するstateと元のstateの差分があれば、再描画される
// reducer名がそのままstateの名前になる  (このコンポーネントのstateの情報ということ)
export default function menu(state = initialState, action) {
    console.log('reducersです');
    switch (action.type) {
        case 'ADD':
            return {
                menus: [
                    ...state.menus,
                    {
                        id: action.id,
                        isDone: false,
                        text: action.text
                    }
                ]
            };
        case 'UPDATE':
            return Object.assign({}, state, {
                menus: state.map((menu) => {
                    if (menu.id === action.id) {
                        return Object.assign({}, menu, {
                            text: action.text
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