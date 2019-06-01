import React from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import { Link } from 'react-router-dom'
import style from './Contact.module.css'
import Typed from 'react-typed'

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
        <div className={style.colorPatch} />
        <Typed
          className={style.greeting}
          strings={['Get in touch.']}
          typeSpeed={120}
          loop={false}
        />
        <div className={style.iconContainer}>
        <a href="mailto: robmajuri@gmail.com" target="blank"><i class="fas fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/robertmajuri/" target="blank"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/rmajuri"><i className="fab fa-github" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
