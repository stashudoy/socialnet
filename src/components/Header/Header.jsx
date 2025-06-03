import React, { Component } from 'react'
import s from'./Header.module.css'

const Header = () => {
    return(
        <header className={s.header}>

        <img className={s.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png'/>
       <span className={s.title}>MESSANGER</span>
       </header>
    )
}

export default Header