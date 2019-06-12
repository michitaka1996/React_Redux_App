import _ from 'lodash';


//これがreducers自身
 //storeに渡すもの


//reducerはreturnで返却するstateと



//↓↓元のstate
const initialState = {
    menus: [{
        id: 'XXX',
        text: 'aaa',
        degree: null,
        isDone: false
    }]
};
console.log('初期値', initialState);


//componentsから、dispachでactionsへメソッドを受け渡す
//(actionsは、componentsから送られたメソッドを受け取る)
//action で受け取った値を state に適用して更新する
// reducerはreturnで返却するstateと元のstateの差分があれば、再描画される
// reducer名がそのままstateの名前になる  (このコンポーネントのstateの情報ということ)
export default function menu(state = initialState, action){
    switch (action.type) {
        case 'ADD':
            return {
                menus: [
                    ...state.menus,
                    {
                        id: action.id,
                        text: action.text,
                        degree: action.degree,
                        isDone: false
                    }
                ]
            };
        default:
            return state; //当たり前だが、default値も設定させないとreducersを返せないようになる
    }
}