import React, {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css"
import {NavLink} from "react-router-dom";
// import img from "./menu-btn.png"


function Nav (props){

    const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="nav">
                <div className='logo'>RICK & MORTY</div>
                <div className={`nav-items ${isOpen && "open"}`}>
                       <NavLink to='/home'>Home</NavLink>
                       <NavLink to='/about' >About</NavLink>
                       <NavLink to='/favorites'>Favorites</NavLink>
                       <NavLink to='/portfolio'>Portfolio</NavLink>
                       <SearchBar
                           onSearch={props.onSearch}
                       />
                       <NavLink to='/' onClick={props.logout}>Log Out</NavLink>
                </div>
                <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                </div>
                {/*<img src={img} alt="Button" class="hamburger-menu"/>*/}
            </div>
        );
}

export default Nav;