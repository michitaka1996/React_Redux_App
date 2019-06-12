import React from 'react';
import PropTypes from 'props-types';
import ClassNames from 'classnames';



//一個一個のメニュー管理のためのコンポーネント
  //Menuを表示させる
  //doneさせるためにクラス名を動的に変更するのでclassNameを使用する
  //Menuコンポーネントを統括しているMenuListに渡すことが必要　(注意)


//state(このコンポーネントだけで使うデータ)
 //text 編集用の投稿内容
 //editMode(編集のモードが)
class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text, //actions~~storeからまわってきたもの
          editMode: false
        }
    }
  render() {
      console.log('textとは', this.state.text);
      //クラスも動的に変更させること
    　　//クラスがこのままだとモック通り
    　　　//どこのスタイルを変えて行きたいか、->
         //done fa-check-circleをクリックしたらカラーをかえる　どこのp-task(全体)
         //delete fa-times-circleをクリックしたら非表示に  どこの　　p-task(全体)
    　　　//edit   c-menu__body をクリックしたら　編集モードに 編集用のhtmkをshow()する
    return (
         <section className="p-task">
                <div className="c-menu__check">
                    <i className="far fa-3x fa-check-circle"></i>
                </div>
                <div className="c-menu__contents">
                    <h3 className="c-menu__title">筋力トレーニング(動的にかえる)</h3> 
                    <div className="c-menu__body">
                        
                    </div>
                    <div className="c-menu__edit">
                        <i className="fal fa-2x fa-edit"></i>
                    </div>
                </div>
                <div className="c-menu__delete">
                    <i className="far fa-2x fa-times-circle"></i>
                </div>
         </section>
      );
    }
}

export default Menu;