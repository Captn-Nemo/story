import React from 'react';
import InputRadio from './InputRadio';
import Button from './button';
import AccordionButton from './buttonAccordion';

let genre=['Happy','Sad','Funny incident','Inspirational','Struggle & triumph','Other'];
let yellow=["#feeeb2","#fdc700"];
let teal=["#c9ebec","#4bbcc0"];
let orange=["#fddbb4","#fa8807"];
let purple=["#d9c9ec","#804cbf"];

const Form = (props) => {
    function hideProp(e) {
        props.close();
        document.getElementById('guide').style.pointerEvents='all';
    }

    return(
    <div id="form" style={{position:'relative'}}>
        <div className="close " onClick={hideProp}>CLOSE X</div>
       {/* What: {props.what} {props.who} {props.which} */}
        <InputRadio genre={genre} />
        <AccordionButton lbl="When did it happen?" c="0" col={yellow} />
        <AccordionButton lbl="What happened?" c="1" col={teal} />
        <AccordionButton lbl="Why is it important to you?" c="2" col={orange} />
        <AccordionButton lbl="Do you want to add more?" c="3" col={purple}  />
        <div style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <div><Button lbl="Reset" /></div>
            <div><Button lbl="Review" /></div>
        </div>
    </div>
);
    }
export default Form;