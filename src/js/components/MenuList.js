import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';




//親コンポーネント
    //各Menuの統括する　Menuの親コンポーネント
      //各menuに対してなにかアクションを起こす時に、その操作を統括する
      //子要素に、propsとしてメソッドを渡している そのメソッドはcontanerの方で調整している(dispach)
    //この親コンポーネントに、containerからdispach()やstateを渡すことになる
    //この親コンポーネントは、子コンポーネントへpropsを受け渡すことになる
class MenuList extends React.Component{
    constructor(props) {
        super(props);
    }






    render() {
        const { menus, onEnterUpdateMenu ,  onClickRemove, onClickToggleDone } = this.props; //propsで受け渡しているものを指定
        console.log('親component: この時点でのprops', this.props);  //ここでcontainerからpropが渡っていて、指定できているか確認すること

        let tasks = [];
        for (let i in menus) {
            console.log('親component:menus[i]', menus[i]);  //この２つの違いに注意
            console.log('親component:menus(reducersにてデータを加工した後のやつ)', menus);
            //結果
            　  //date: "2019年6月17日(月)"
                // degree: "first"
                // id: "0.nlv0tu07se"
                // isDone: false
                // text: "eggre;e↵↵"   
            
            tasks.push(<Menu key={menus[i].id} {...menus[i]}   //子コンポーネントへpushすることでpropとしてreducersのmenus、dispach()した各propsの値を渡している
                onEnterUpdateMenu={(text) => onEnterUpdateMenu(menus[i].id, text)}
                onClickRemove={() => onClickRemove(menus[i].id)}
                onClickToggleDone={() => onClickToggleDone(menus[i].id)}
            />);
        }
        console.log('親component: tasks(配列にpropsをpushした後のやつ)', tasks);  //reducersのコレクションデータにここでpropsを追加した後のもの
            //結果
                //$$typeof: Symbol(react.element)
                // key: "0.4tasdu5050d"
                // props:
                // date: "2019年6月17日(月)"
                // degree: "first"
                // id: "0.4tasdu5050d"
                // isDone: false
                // onClickRemove: ƒ onClickRemove()   //propsで指定したコールバックメソッドも反映されている
                // onClickToggleDone: ƒ onClickToggleDone()
                // onEnterUpdateMenu: ƒ onEnterUpdateMenu(text)
        
    
        
        //================================
        // degreeの値によって、
        // Menuコンポーネントのstate.textを動的に変更 
        //================================
        const lastMenu = menus.pop(); //末尾の配列の要素を取得
        console.log('親component: 最後のMenu', lastMenu);
        console.log('親component: 最後のMenuのdegree', lastMenu.degree); //配列の取り出し方に注意
        
        if (lastMenu.degree === 'first') {
            console.log('親component:　疲労度は1なのでメニューを作成します');
        }
        




        return (
            <div>
                {tasks}
            </div>
        );
    }
}








//propsのtype指定
 //propsはコンポーネント作成時に値を指定することでコンポーネントで表示させたいデータを指定できます。
 //React.jsでコンポーネントを定義する時に、PropTypesを指定することでpropsにおける引数の入力チェックを行えます。
MenuList.propTypes = {
    menus: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            isDone: PropTypes.bool.isRequired,
            degree: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onEnterUpdateMenu: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    onClickToggleDone: PropTypes.func.isRequired,
};





export default MenuList;