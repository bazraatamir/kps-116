import React from 'react';
import style from"./style.module.css";
import { Link } from 'react-router-dom';


function Header () {
    return (  
    <div className={style.header}>
        <h1 >The blog</h1>
        <div className={style.toolBar}>
           <Link to="/" >home</Link>
           <Link to="/Create" >Create</Link>
           <Link to="/register">reqister</Link>


        </div>
        
    </div>
    );
}

export default Header;