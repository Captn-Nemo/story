import React from 'react';

function InputRadio(props) {
    return(
        <div className="formelement">
        <div className="RadioForm patrickhand">
            <div className="RadioGroup">
                {props.genre.map((genre,id) => { return(
                    <div key={id} className="RadioBlock">
                        <input type="radio" className="inputRadio" name="genre" value={genre} />
                        <label >{genre}</label>
                    </div>
                );
                })}
                </div>
            </div>
        </div>   
    )
}

export default InputRadio;