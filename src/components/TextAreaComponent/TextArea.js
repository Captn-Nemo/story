import React from 'react';
import './TextArea.css';
import bg from './bg.svg';
import bgTeal from './bgteal.svg';
import bgOrange from './bgorange.svg';
import bgPurple from './bgpurple.svg';
import bgYellow from './bgyellow.svg';

function TextAreaDefault(props) {
    return(
            <div className="TextAreaForm" style={{backgroundImage:'url('+bg+')'}}>
                <img src={props.icon} style={{left:props.dir==='left'?'0':'85%'}} alt='' />
                <textarea rows="20" cols="50" className="TextArea" defaultValue={props.holder} />
            </div>   
    )
}

function TextAreaTeal(props) {
    return(

            <div className = "TextAreaForm" style={{backgroundImage:'url('+bgTeal+')'}}>
                <img src={props.icon} style={{left:props.dir==='left'?'0':'85%'}} alt='' />
                <textarea rows="20" cols="50" className="TextArea" defaultValue={props.holder} />
            
            </div>   


    )
}

function TextAreaOrange(props) {
    return(
            <div className = "TextAreaForm" style={{backgroundImage:'url('+bgOrange+')'}}>
                <img src={props.icon} style={{left:props.dir==='left'?'0':'85%'}} alt='' />
                <textarea rows="20" cols="50" className="TextArea" defaultValue={props.holder} />
            
            </div>   
    )
}

function TextAreaPurple(props) {
    return(
            <div className = "TextAreaForm" style={{backgroundImage:'url('+bgPurple+')'}}>
                <img src={props.icon} style={{left:props.dir==='left'?'0':'85%'}} alt='' />
                <textarea rows="20" cols="50" className="TextArea" defaultValue={props.holder} />
            
            </div>   
    )
}

function TextAreaYellow(props) {
    return(
            <div className = "TextAreaForm" style={{backgroundImage:'url('+bgYellow+')'}}>
                <img src={props.icon} style={{left:props.dir==='left'?'0':'985%'}} alt='' />
                <textarea rows="20" cols="50" className="TextArea" defaultValue={props.holder} />
            
            </div>    
    )
}

function TextArea(props){
    switch(props.col){
        case 'Teal':
            return TextAreaTeal(props);
        case 'Orange':
            return TextAreaOrange(props);
        case 'Yellow':
            return TextAreaYellow(props);
        case 'Purple':
            return TextAreaPurple(props);
        default:
            return TextAreaDefault(props);
    }
}


export default TextArea;