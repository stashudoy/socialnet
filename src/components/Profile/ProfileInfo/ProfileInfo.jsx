import React, { Component } from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <img src='https://archive-share.america.gov/wp-content/uploads/2024/01/international_waters_ocean_sea_shutterstock_61253524-1-1068x485.jpg'></img>
            <div>
                <img className='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhe5lUqQZZVz4fqagaeVwKrrN58P8p4g5_A&s"></img>
            </div>
            <div className={s.descBlock}>
                description
            </div>
        </div>
    )
}


export default ProfileInfo