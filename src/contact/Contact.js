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
        <div className={style.contactDetailsContainer}>
          <p>
            <span>Email: </span>robmajuri@gmail.com
          </p>
          <p>
            <span>GitHub: </span>
            <a href="https://github.com/rmajuri" target="blank">
              https://github.com/rmajuri
            </a>
          </p>
          <p>
            <span>LinkedIn: </span>
            <a href="https://www.linkedin.com/in/robertmajuri/" target="blank">
              https://www.linkedin.com/in/robertmajuri/
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
