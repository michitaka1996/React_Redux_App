import { connect } from 'react-redux'
import {  updateMenu } from '../actions'
import MenuList from '../components/MenuList';




//MenuListでコールバックさせるためのメソッド




//action
const mapDispachToProps = dispatch => {
    return {
        onEnterUpdateMenu: (id, text) => {
            dispatch(updateMenu(id, text));
        }
    }
};


//
export default connect(mapDispachToProps)(MenuList) //menuListに渡すもの
