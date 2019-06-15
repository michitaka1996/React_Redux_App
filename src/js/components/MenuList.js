import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';





//各Menuの統括する　Menuの親コンポーネント
//この親コンポーネントに、containerからdispach()やstateを渡すことになる
//この親コンポーネントは、子コンポーネントへpropsを受け渡すことになる
class MenuList extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { menus, onEnterUpdateMenu } = this.props;
        console.log('この時点でのprops', this.props);  //ここでcontainerからpropが渡っていて、指定できているか確認すること
        console.log('menusとは', this.props.menus);
        
        let tasks = [];
        for (let i in menus) {
            tasks.push(<Menu key={menus[i].id} {...menus[i]}
                onEnterUpdateMenu={(text) => onEnterUpdateMenu(menus[i].id, text)}
            />);
        }
        console.log('tasks', tasks);
        return (
            <div>
                {tasks}
            </div>
        );
    }
}



//propsのtype指定
MenuList.propTypes = {
    menus: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            isDone: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onEnterUpdateMenu: PropTypes.func.isRequired
};



export default MenuList;