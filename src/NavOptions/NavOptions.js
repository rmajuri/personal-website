import React from 'react'
import style from './NavOptions.module.css'

const NavOptions = () => {
  return (
    <div className={style.container}>
      <h1 className={style.option}>Work</h1>
      <h1 className={style.option}>About</h1>
      <h1 className={style.option}>Contact</h1>
      <h1 className={style.option}>Resume</h1>
    </div>
  )
}
export default NavOptions