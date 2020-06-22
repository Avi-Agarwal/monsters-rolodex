import React from "react";
import './switch-data-button.styles.css';

export const SwitchData = ({ handleClick, buttonTexts}) => (
    <button
        className='button button1'
        //onClick={() => handleClick}
        onClick = {handleClick}
    >
        {buttonTexts}
    </button>
);