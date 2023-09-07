import React from 'react'
import classes from './button.module.css'
export default function Button(props) {
  return (
    <div className={classes.btn}>{props.children}</div>
  )
}
