import React from "react"
import s from './Users.module.css'

let Users = (props) => {

        if(props.users.length === 0){
            props.setUsers(

                [    
                    {id:1, 
                        fotoUrl:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReXPFAJ5cUhfTLDRA7ZJlBZdwOmO7AfLRhazE1rl5-nJhk0NHeTtwX983IoqiSjrPB-R4OiIN_uaPO9jqW41E2Ww',
                         followed: false,
                          fullName:'Vasian',
                           status: 'fisher',
                            location:{city: 'Moscow',
                                 country: 'Rus'}},
                    {id:2, fotoUrl:'https://s0.rbk.ru/v6_top_pics/media/img/0/25/347537078331250.jpeg',  followed: true, fullName:'Alex', status: 'electro', location:{city: 'Yaroslavl', country: 'Rus'}},
                    {id:3, fotoUrl:'https://russia-israel.com/wp-content/uploads/2022/01/evreyskaya-vneshnost-3-430x280.jpg',   followed: false, fullName: 'Yosia', status: 'bank', location:{city: 'Ierusalim', country: 'Izr'}}
                ]

            )
        }

    return (<div>{

        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.img} src={u.fotoUrl}/>
                </div>
                <div>
                    {u.followed
                     ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                     : <button onClick={() => {props.follow(u.id)}}>Follow</button>                     
                     }
                    
                </div>
            </span>

            <span>
                <span>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>
                        {u.location.country}
                      
                    </div>
                    <div>
                        {u.location.city}
                    </div>
                </span>

            </span>
        </div>)
        
        }</div>
    
    
    )
}


export default Users