import React, { Component } from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}><NavLink to="/profile" className={i => i.isActive ? s.active : s.item}>Profile</NavLink></div>
        <div className={s.item}><NavLink to="/dialogs" className={i => i.isActive ? s.active : s.item}>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/">News</NavLink></div>
        <div className={s.item}><NavLink to="/">Music</NavLink></div>
        <div className={s.item}><NavLink to="/">Settings</NavLink></div>
       </nav>
    )
}

export default Navbar