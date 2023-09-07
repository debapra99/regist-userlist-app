import React from 'react'
import classes from './user-item.module.css'

export default function UserItem({data}) {
    return data.map(el => 
    <li className={classes.item} key={el.id}>
        <img src={el.avatar}/>
        <div className={classes.content} >
            <div className={classes.sumary}>
                <h2>{el.first_name} {el.last_name} </h2>
                <div className={classes.email}> 
                    <span>{el.email}</span>
                </div>
            </div>
           
        </div>
    </li>
    )

  
}
