import React from 'react'
import Link from 'next/link'
import classes from './main-header.module.css'

export default function MainHeader() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'>Registration</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href='/users'>User List</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
