import React from 'react'
import classes from './showregistration.module.css'
export default function Showregistration(props) {
  return (
    <div className={classes.postcard}>
            <h2 className={classes.posttitle}>{props.name}</h2>
            <p>{props.year}</p>
            <p>{props.color}</p>
            <p>{props.pantone_value}</p>
            {/* <button 
                className={classes.btn}
                onClick={() => props.deletePost(props.id)}
            >Delete</button> */}
        </div>
  )
}
