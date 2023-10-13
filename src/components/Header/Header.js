import React from 'react';
import s from './Header.module.scss'
import HeaderItem from "./HeaderItem/HeaderItem";
import {ReactComponent as Logo} from "../../assets/cat-paw.svg";
import SearchComponent from "../SearchComponent/SearchComponent";
import Profile from "../Profile/Profile";

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.logo}>キティック <Logo style={{marginTop: "5px"}} width={50} height={50}
                                                className={s.pawLogo}/></div>
            <div style={{
                display: "flex",
                width: "600px",
                height: "100%",
            }}>
                <HeaderItem text={"ミーム"}/>
                <HeaderItem text={"ビデオ"}/>
                <HeaderItem text={"画像"}/>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "30%",
                height: "100%",
                justifyContent: "space-between",
                marginRight: "10px"
            }}>
                <SearchComponent/>
                <Profile/>
            </div>
        </div>
    );
};

export default Header;