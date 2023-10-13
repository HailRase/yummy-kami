import React from 'react';
import s from './SearchComponent.module.scss'
import {ReactComponent as SearchButton} from "../../assets/paw-button.svg";

const SearchComponent = () => {
    return (
        <div className={s.searchContainer}>
            <input  className={s.searchInput} type="text"/>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "40px",
                backgroundColor: "rgba(255,255,255,0.33)",
                cursor: "pointer"
            }}>
                <SearchButton width={22} height={22} className={s.searchButton}/>
            </div>
        </div>
    );
};

export default SearchComponent;