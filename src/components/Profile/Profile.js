import React from 'react';
import s from './Profile.module.scss'
import {ReactComponent as AvaKitty} from "../../assets/hello-kitty.svg";

const Profile = () => {
    return (
        <div className={s.container}>
            <AvaKitty style={{marginTop: "5px"}} width={50} height={50} className={s.avatar}/>
        </div>
    );
};

export default Profile;