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
            degree: '',
            isDegree: false //degree(疲労度が存在するかどうか)
        }
        this.showModal = this.showModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        this.handleColor = this.handleColor.bind(this);
        this.firstDegree = this.firstDegree.bind(this);
        this.secondDegree = this.secondDegree.bind(this);
        this.thirdDegree = this.thirdDegree.bind(this);
        this.fourthDegree = this.fourthDegree.bind(this);
        this.fifthDegree = this.fifthDegree.bind(this);
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
    handleChange(e) {
        console.log('component(MenuCreater): handleChangeが呼ばれました');
        this.setState({
            val: e.target.value
        });
    }
    handleKeyUp(e) { //テキストを確定させる。シフト+enterで確定させたとき
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


            if (val && degree) {  //テキスト入力と疲労度のボタンがあった場合
                console.log('component(MenuCreater): valとdegreeとdateをactionsに渡します。dispachでaddMenuメソッドを呼びます');
                console.log('component(MenuCreater):actionに渡す値(val)',val);
                console.log('component(MenuCreater):actionに渡す値(degree)',degree);
                console.log('component(MenuCreater):actionに渡す値(date)', date);
                this.props.dispatch(addMenu(this.createHashId(), val, degree, date));  //propsでdispachを受け取っている  connect(自分自身)
                console.log('component(MenuCreater): dispachで値を渡しました');
    
                
            } else if (val && degree === '' ) { //テキスト入力のみがあった場合
                console.log('component(MenuCreater): valとdateをactionsに渡します。dispachでaddMenuメソッドを呼びます');
                console.log('component(MenuCreater):actionに渡す値(val)',val);
                console.log('component(MenuCreater):actionに渡す値(date)', date); //ここでのdateは読み込まれている
                console.log('component(MenuCreater):degreeの値(degree)', this.state.degree);
                this.props.dispatch(addMenu(this.createHashId(), val, degree, date));
                console.log('component(MenuCreater): dispachで値を渡しました');  
                //注意！！  dispachで渡すメソッドの引数の順番は、actionsでのメソッドの引数の値と同じ順番にすること logのプログラムも読み込んでしまうのでそこは気をつけていくこと
                    // console.log('component(MenuCreater): このprops', this.props.dispatch(addMenu(this.createHashId(), val, degree,  date))); 
                    //    {type: "ADD", id: "0.fl5kq7vusx", text: "ggrgew↵", degree: "", date: "2019年6月15日(土)"}
                    //     date: "2019年6月15日(土)"
                    //     degree: ""
                    //     id: "0.fl5kq7vusx"
                    //     text: "ggrgew↵"
                    //     type: "ADD"
                    //     __proto__: Object
            } else if (empty(val) && degree) {
                console.log('component(MenuCreater): dateとdegreeをactionsへ渡します。dispachでaddMenuメソッドを呼びます');
                console.log('component(MenuCreater):actionに渡す値(date)', date); 
                console.log('component(MenuCreater):degreeの値(degree)', this.state.degree);
                this.props.dispatch(addMenu(this.createHashId(), val, degree, date)); 
            } else {
                console.log('component(MenuCreater): dateをactionsへ渡します。dispachでaddMenuメソッドを呼びます'); 
            }

            console.log('component(MenuCreater):stateをリセットします'); //ついでにisDegreeも反転させておく
              this.setState({
                 val: '',
                 degree: '',
              });
            console.log('component(MenuCreater):リセットしたあとのstateの値', this.state.val); //renderが呼ばれるは処理が終わったあとの値なのでこの時点では値が存在する
        }
    }
     handleColor() {
            console.log('component(MenuCreater): handleColorです'); //あとで消すこと
    }
    firstDegree() {
        console.log('component(MenuCreater): 疲労度1がクリックされました');
        this.setState({
            degree: 'first',
            isDegree :!this.state.isDegree
        });
        this.handleColor();
    }
    secondDegree() {
        console.log('component(MenuCreater): 疲労度2がクリックされました');
        this.setState({
            degree: 'second',
            isDegree :!this.state.isDegree
        });
    }
    thirdDegree() {
        console.log('component(MenuCreater): 疲労度3がクリックされました');
        this.setState({
            degree: 'third',
            isDegree :!this.state.isDegree
        });
    }
    fourthDegree() {
        console.log('component(MenuCreater): 疲労度4がクリックされました');
        this.setState({
            degree: 'fourth',
            isDegree :!this.state.isDegree
        });
    }
    fifthDegree() {
        console.log('component(MenuCreater): 疲労度5がクリックされました');
        this.setState({
            degree: 'fifth',
            isDegree :!this.state.isDegree
        });
    }




    

    
    render() {
        console.log('component(MenuCreater): valの値render', this.state.val);
        console.log('component(MenuCreater): degreeの値render', this.state.degree);
        console.log('component(MenuCreater): 疲労度(render)は' + this.state.degree + 'です');
        console.log('component(MenuCreater): isDegreeの値render', this.state.isDegree);

        const colorFirst = $('.c-modalBtn__first');   //ナンバークリックで色を変えること　クリックされたらisDegreeを反転させる
        const colorSecond = $('.c-modalBtn__second');
        const colorThird = $('.c-modalBtn__third');  
        const colorFourth = $('.c-modalBtn__fourth');   
        const colorFifth = $('.c-modalBtn__fifth');
        
       //ボタン1~5が押された時の処理
        //やりたいこと：1ボタンが押されたら、addClassして色を変える
        　//さらに、stateのdegreeでfirst~fifthの値を付与する
        　//それをpropsとして、actions~storeへ流しpropsを更新させる
        　//もしdegreeがfirstだったら、決められたメニューをMenuのbodyに流し込む
           //ということはMenuCreaterからMenuへprops(degree)を渡すこと
        

        if (this.state.isDegree === true) {  //ボタンが押されたら色を変える
            switch (this.state.degree) {
                case 'first':
                    colorFirst.addClass("c-modal__colorFirst")
                    break;
                case 'second':
                    colorSecond.addClass("c-modal__colorSecond")
                    break;
                case 'third':
                    colorThird.addClass("c-modal__colorThird")
                    break;
                case 'fourth':
                    colorFourth.addClass("c-modal__colorFourth")
                    break;
                case 'fifth':
                    colorFifth.addClass("c-modal__colorFifth")
                    break;
                default:
            }   
        }
     
        if (this.state.isDegree === false) {  //他のボタンが押されたらすでに色が付いているものは色を消す(元に戻す)
            colorFirst.removeClass("c-modal__colorFirst")
            colorSecond.removeClass("c-modal__colorSecond")
            colorThird.removeClass("c-modal__colorThird")
            colorFourth.removeClass("c-modal__colorFourth")
            colorFifth.removeClass("c-modal__colorFifth") 
        }

        //if文で書いた場合
            // if (this.state.degree === 'first' && this.state.isDegree === true) {
            //         colorFirst.addClass("c-modal__colorFirst")  
            //         } else {
            //         colorFirst.removeClass("c-modal__colorFirst")  
            // } 
        
            // if (this.state.degree === 'second' && this.state.isDegree === true) {
            //         colorSecond.addClass("c-modal__colorSecond")  
            //         } else {
            //         colorSecond.removeClass("c-modal__colorSecond")  
            // }
        
            // if (this.state.degree === 'third' && this.state.isDegree === true) {
            //         colorThird.addClass("c-modal__colorThird")  
            //         } else {
            //         colorThird.removeClass("c-modal__colorThird")  
            // }
        
            // if (this.state.degree === 'fourth' && this.state.isDegree === true) {
            //         colorFourth.addClass("c-modal__colorFourth")  
            //         } else {
            //         colorFourth.removeClass("c-modal__colorFourth")  
            // }
            
            // if (this.state.degree === 'fifth' && this.state.isDegree === true) {
            //         colorFifth.addClass("c-modal__colorFifth")  
            //         } else {
            //         colorFifth.removeClass("c-modal__colorFifth")  
            // }
        




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
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__first c-modalHead__first" onClick={this.firstDegree}>1</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__second" onClick={this.secondDegree} >2</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__third"  onClick={this.thirdDegree} >3</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__fourth" onClick={this.fourthDegree} >4</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__fifth"  onClick={this.fifthDegree} >5</span ></h2>
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