import React from 'react';
import { connect } from 'react-redux'
import { addMenu } from '../actions/index'
import PropTypes from 'prop-types';

//メニューを作るためのcomponent
  //Menuを作るためのメソッドをdispachするのでconnectを使う


//dispachを使って、actionsに渡す


//このコンポーネントのデータ
  //val(モーダルのtextareaのデータ)
  //valは投稿内容
class MenuCreater extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            degree:''
        }
        this.showModal = this.showModal.bind(this);
        this.firstDegree = this.firstDegree.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    createHashId() {
        return Math.random().toString(36).slice(-16);
    }
    showModal() {
        console.log('モーダルを見せます');
        $('#js-modal').show();
    //    let modalWidth = 
    }
    firstDegree() {
        console.log('疲労度は' + this.state.degree + 'です');
        this.setState({ degree: 'first' });
    }
    handleChange(e) {
        this.setState({
            val: e.target.value
        });
    }
    handleKeyUp(e) {
        if (e.keyCode === 13 && e.shiftKey === true) {
            console.log('Enter+ShiftKeyが押されたので確定します');
            const val = e.target.value;
            const degree = this.state.degree;
            if (val && degree) {
                console.log('valとdegree両方に値があります');
                this.props.dispatch(addMenu(this.createHashId(), val, degree));
            } else if (val && !degree) {
                console.log('valのみ値があります');
                this.props.dispatch(addMenu(this.createHashId(), val));
            }
        }
    }
    render() {
        console.log('degreeの値', this.state.degree);
        return (
          <div>
            <section className="p-createMenu" id="js-createMenu">
                <div className="c-addMenu" id="js-addMenu" onClick={this.showModal}>
                    <i className="fal fa-3x fa-plus-circle"></i>
                </div>
                <h1>how's it going??</h1>
            </section>

             <section className="p-modalWindow" id="js-modal" onClick={this.showModal}>
                <h2>今日の疲労度は...</h2>
                    <div className="c-modalHead">
                    <h2><span className="c-modal__btn c-modalHead__number" onClick={this.firstDegree}>1</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number" >2</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number" >3</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number" >4</span></h2>
                    <h2><span className="c-modal__btn c-modalHead__number" >5</span></h2>
                </div>
                <div className="c-modalBody">
                    <h2>やりたいメニューがあれば追加できます。</h2>
                    <textarea name="" id="" cols="30" rows="10"  onChange={this.handleChange} onKeyUp={this.handleKeyUp} val={this.state.val}></textarea>
                </div>
            </section>
          </div>
        
        );
    }
}


MenuCreater.propTypes = {
    dispatch: PropTypes.func.isRequired
};



export default connect()(MenuCreater)