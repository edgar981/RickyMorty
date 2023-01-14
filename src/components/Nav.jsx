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
                   <ul>
                       <li>
                           <NavLink to='/about' >About</NavLink>
                       </li>
                       <li>
                           <NavLink to='/home'>Home</NavLink>
                       </li>
                   </ul>
                </div>
            </div>
        );
}

export default Nav;