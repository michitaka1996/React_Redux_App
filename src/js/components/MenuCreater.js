import React from 'react';
import {connect} from 'react-redux'

//メニューを作るためのcomponent
  //Menuを作るためのメソッドをdispachするのでconnectを使う

class MenuCreater extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
        this.showModal = this.showModal.bind(this);
    }
    showModal() {
        console.log('モーダルを見せます');
        $('#js-modal').show();
    //    let modalWidth = 
    }
    render() {
        return (
          <div>
            <section className="p-createMenu" id="js-createMenu">
                <div className="c-addMenu" id="js-addMenu" onClick={this.showModal}>
                    <i className="fal fa-3x fa-plus-circle"></i>
                </div>
                <h1>how's it going??</h1>
            </section>

             <section className="p-modalWindow" id="js-modal">
                <h2>今日の疲労度は...</h2>
                <div className="c-modalHead">
                    <h2><span className="c-modal__btn c-modalHead__number">1</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number">2</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number">3</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number">4</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number">5</span></h2>
                </div>
                <div className="c-modalBody">
                    <h2>やりたいメニューがあれば追加できます。</h2>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="c-modalAdd">
                    <button>作成</button>
                </div>
            </section>
          </div>
        
        );
    }
}



export default connect()(MenuCreater)