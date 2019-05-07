import React from 'react'
import style from './NavOptionsHeader.module.css'
import { Link } from 'react-router-dom'

const NavOptionsHeader = () => {
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
      <h1 className={classes.join(' ')}>RESUME</h1>
    </div>
  )
}
export default NavOptionsHeader