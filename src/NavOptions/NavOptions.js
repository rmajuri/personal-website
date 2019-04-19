import React from 'react'
import style from './NavOptions.module.css'

const NavOptions = () => {
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
export default NavOptions