import React from 'react';
import s from './HeaderItem.module.scss'

const HeaderItem = (props) => {
    return (
        <div className={s.container}>
            <span onClick={() => {}}>{props.text}</span>
        </div>
    );
};

export default HeaderItem;