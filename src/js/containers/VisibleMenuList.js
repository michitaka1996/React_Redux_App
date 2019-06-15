import { connect } from 'react-redux'
import {  updateMenu } from '../actions'
import MenuList from '../components/MenuList';

//Reduxのcontainerは、だいたい決まった形になる



//state　重要
//stateっていうのは、reducer名がそのままstateの名前になる  (このコンポーネントのstateの情報ということ)  task.~~で使うことができる
  //つまりreducerで指定しているデータの総称が、stateとして使うことができる
  //reducersで、storeに流すデータを設定した(初期値)が、その中のデータを取り出したい場合は
  　//state.reducer名.プロパティ名になるので注意!
const mapStateToProps = state => {
    return {
        menus: state.menu.menus
    }
};






//MenuListでコールバックさせるためのメソッドをマッピングする
const mapDispachToProps = dispatch => {
    return {
        onEnterUpdateMenu: (id, text) => {
            dispatch(updateMenu(id, text));
        }
    }
};


//
export default connect(mapStateToProps, mapDispachToProps)(MenuList) //menuListに渡すもの
