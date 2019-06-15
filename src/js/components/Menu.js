import React from 'react';
import PropTypes from 'prop-types';
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
      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleKeyUpClose = this.handleKeyUpClose.bind(this);
      this.handleClickEdit = this.handleClickEdit.bind(this);
    }
  handleChangeText(e) {
   console.log('編集完了しました！stateを更新します');
    this.setState({
      text: e.target.value
    });
  }
  handleKeyUpClose(e) {
    if (e.keyCode === 13 && e.shiftKey === true) {
      console.log(編集確定します);
      this.setState({
        editMode: true
      });
      console.log('アップデートします。アップデートするためにpropsを実行します。');
      this.props.onEnterUpdateMenu(e.currentTarget.value);
    }
  }
  handleClickEdit() {
    console.log('編集します');
    this.setState({
      editMode: true
    });
  }
  render() {
      console.log('textとは', this.state.text);
      //クラスも動的に変更させること
    　　//クラスがこのままだとモック通り
    　　　//どこのスタイルを変えて行きたいか、->
         //done fa-check-circleをクリックしたらカラーをかえる　どこのp-task(全体)
         //delete fa-times-circleをクリックしたら非表示に  どこの　　p-task(全体)
    　　　//edit   c-menu__body をクリックしたら　編集モードに 編集用のhtmkをshow()する

    const textarea = (this.state.editMode) ?
      <textarea className="editText" value={this.state.text} type="text"
                onChange={this.handleChangeText} onKeyUp={this.handleKeyUpClose}/> :
      <div className="c-menu__body" onClick={this.handleClickEdit}>{this.state.text}</div>;
    
    return (
         <section className="p-task">
                <div className="c-menu__check">
                    <i className="far fa-3x fa-check-circle"></i>
                </div>
                <div className="c-menu__contents">
                    <h3 className="c-menu__title">ここを動的にかえる</h3> 
                    {textarea}
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

Menu.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onEnterUpdateMenu: PropTypes.func.isRequired
};

export default Menu;