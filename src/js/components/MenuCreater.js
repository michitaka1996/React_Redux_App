import React from 'react';
import { connect } from 'react-redux'
import { addMenu } from '../actions/index'
import PropTypes from 'prop-types';

//component(MenuCreater)
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
        console.log('component(MenuCreater): 一意のIDを作ります');
        return Math.random().toString(36).slice(-16);
    }
    showModal() {
        console.log('component(MenuCreater): モーダルを見せます');
        $('#js-modal').show();
        console.log('component(MenuCreater)この時MenuCreaterにある値(val): ', this.state.val);
        console.log('component(MenuCreater)この時MenuCreaterにある値(degree): ', this.state.degree);
    }
    firstDegree() {
        console.log('component(MenuCreater): 疲労度は' + this.state.degree + 'です');
        this.setState({ degree: 'first' });
    }
    handleChange(e) {
        console.log('component(MenuCreater): handleChangeが呼ばれました');
        this.setState({
            val: e.target.value
        });
    }
    handleKeyUp(e) {
        if (e.keyCode === 13 && e.shiftKey === true) {
            console.log('component(MenuCreater): モーダルを非表示にします');
            $('#js-modal').hide();
            console.log('component(MenuCreater): Enter+ShiftKeyが押されたので確定します');
            const val = e.target.value;
            const degree = this.state.degree;
            let now = new Date();
            let y = now.getFullYear();
            let m = now.getMonth() + 1;
            let d = now.getDate();
            let w = now.getDay();
            let wd = ['日', '月', '火', '水', '木', '金', '土'];

            let date = y + '年' + m + '月' + d + '日' + '(' + wd[w] + ')';
            console.log('component(MenuCreater): 今日のdate', date);


            if (val && degree) {
                console.log('component(MenuCreater): valとdegreeとdateをactionsに渡します。dispachでaddMenuメソッドを呼びます');
                console.log('component(MenuCreater):actionに渡す値(val)',val);
                console.log('component(MenuCreater):actionに渡す値(degree)',degree);
                console.log('component(MenuCreater):actionに渡す値(date)',date);
                this.props.dispatch(addMenu(this.createHashId(), val, degree, date));  //propsでdispachを受け取っている  connect(自分自身)

            } else if (val && !degree ) {
                console.log('component(MenuCreater): valとdateをactionsに渡します。dispachでaddMenuメソッドを呼びます');
                console.log('component(MenuCreater):actionに渡す値(val)',val);
                console.log('component(MenuCreater):actionに渡す値(date)', date); //ここでのdateは読み込まれている
                console.log('component(MenuCreater):degreeの値(degree)', this.state.degree);
                this.props.dispatch(addMenu(this.createHashId(), val, degree, date));
                //注意！！  dispachで渡すメソッドの引数の順番は、actionsでのメソッドの引数の値と同じ順番にすること logのプログラムも読み込んでしまうのでそこは気をつけていくこと
                // console.log('component(MenuCreater): このprops', this.props.dispatch(addMenu(this.createHashId(), val, degree,  date))); 
            //    {type: "ADD", id: "0.fl5kq7vusx", text: "ggrgew↵", degree: "", date: "2019年6月15日(土)"}
            //     date: "2019年6月15日(土)"
            //     degree: ""
            //     id: "0.fl5kq7vusx"
            //     text: "ggrgew↵"
            //     type: "ADD"
            //     __proto__: Object
            }
            console.log('component(MenuCreater):stateをリセットします');
            // delete this.state.val;
              this.setState({
                 val: '',
                 degree: '',
              });
            console.log('component(MenuCreater):リセットしたあとのstateの値', this.state.val); //renderが呼ばれるは処理が終わったあとの値なのでこの時点では値が存在する
        }
    }
    render() {
        console.log('component(MenuCreater): valの値render', this.state.val);
        console.log('component(MenuCreater): degreeの値render', this.state.degree);
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
                    <textarea name="" id="" cols="30" rows="10"  onChange={this.handleChange}  val={this.state.val} onKeyUp={this.handleKeyUp}></textarea>
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