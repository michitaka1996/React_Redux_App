import  React from 'react';
import MenuCreater from './MenuCreater';


class MenuApp extends React.Component{
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <div>
               <MenuCreater/>
            </div>
       );
    }
}

export default MenuApp