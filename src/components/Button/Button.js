import React, {useState} from 'react';
import s from './Button.module.scss'
import {ReactComponent as PawButton} from "../../assets/paw-button.svg";

const Button = (props) => {


    return (
        <div style={props.style}>
            <div className={s.container} onClick={props.onClick}>
                <PawButton width={30} height={30} className={s.pawButton}/>
                {/*クリック*/}
            </div>
        </div>

    );
};

export default Button;