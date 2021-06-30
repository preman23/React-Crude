import React from 'react';
import ReactDom from 'react-dom' ;
//import history from '../history';
const Model = props =>{
    return ReactDom.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active ">
            <div 
            onClick={(e)=>e.stopPropagation()} 
            className="ui standard modal visible active"> 
            <div className="header">{props.title}</div>
            <div className="content">{props.content}</div>
            <div className="actions">{props.actions} </div>
            </div>
        </div>,
        document.querySelector('#model')

    );
};
export default Model;