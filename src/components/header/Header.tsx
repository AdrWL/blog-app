import './Header.css';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {SearchContext} from "../../contexts/search.context";
import {Btn} from "../common/Btn";

function Header() {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    };

    return (
        <>
            <div className="nav">
                <div className="nav_container">
                    <div className="nav_element">
                        <div className="menu">
                            <div className="nav_list">
                                <Btn to="/" text="Strona Główna"/>
                                <Btn to="/add" text="Dodaj post"/>
                                <div className="search">
                                    <form onSubmit={setSearchFromLocalState}>
                                        <input type="text" value={inputVal}
                                               onChange={e => setInputVal(e.target.value)}/>
                                        <Btn to="/" text="Wyszukaj Post"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;