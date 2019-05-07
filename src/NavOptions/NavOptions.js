import React from 'react'
import style from './NavOptions.module.css'
import { Link } from 'react-router-dom'

const NavOptions = () => {
  const classes = [style.option, style.hvrgrow]
  return (
    <div className={style.container}>
      <Link to="/work">
        <h1 className={classes.join(' ')}>WORK</h1>
      </Link>
      <Link to="/about">
        <h1 className={classes.join(' ')}>ABOUT</h1>
      </Link>
      <Link to="/contact">
        <h1 className={classes.join(' ')}>CONTACT</h1>
      </Link>
      <Link to="/resume">
        <h1 className={classes.join(' ')}>RESUME</h1>
      </Link>
    </div>
  )
}
export default NavOptions
