import React from 'react';
import SearchBar from "./SearchBar";
import "./Nav.css"
import {NavLink} from "react-router-dom";

function Nav (props){
        return (
            <div className="nav">
                <div>
                    <SearchBar
                        onSearch={props.onSearch}
                    />
                    <div><NavLink to='/about' >About</NavLink></div>
                    <div><NavLink to='/home'>Home</NavLink></div>
                    <div><NavLink to='/'>Inicio</NavLink></div>
                </div>
            </div>
        );
}

export default Nav;