import React from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import { Link } from 'react-router-dom'
import style from './Contact.module.css'

const Contact = () => {
    const headerClasses = [style.header, style.hvrgrow]
 
  return (
      <div>
        <div className={style.container}>
        <Link to="/">
          <h1 className={headerClasses.join(' ')}>RM</h1>
        </Link>
        <TextHeader />
        <NavOptionsHeader />
        </div>
      </div>

  )
}

export default Contact