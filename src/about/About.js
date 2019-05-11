import React from 'react'
import TextHeader from './TextHeader/TextHeader'
import style from './About.module.css'
import NavOptionsHeader from './NavOptions/NavOptionsHeader'
import { bio } from './AboutText'
import { Link } from 'react-router-dom'

const About = () => {
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
        <img
          className={style.photo}
          src="rob.jpg"
          alt="Photograph of Rob Majuri"
        />
        <p className={style.bio}>{bio}</p>
      </div>
    </div>
  )
}

export default About
