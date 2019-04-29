import React from 'react'
import style from './NavOptionsHeader.module.css'

const NavOptionsHeader = () => {
  const classes = [style.option, style.hvrgrow]
  return (
    <div className={style.container}>
      <h1 className={classes.join(' ')}>WORK</h1>
      <h1 className={classes.join(' ')}>ABOUT</h1>
      <h1 className={classes.join(' ')}>CONTACT</h1>
      <h1 className={classes.join(' ')}>RESUME</h1>
    </div>
  )
}
export default NavOptionsHeader