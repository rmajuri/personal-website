import React from 'react'
import TextHeader from './TextHeader/TextHeader'
import style from './About.module.css'
import NavOptionsHeader from './NavOptions/NavOptionsHeader'

const About = () => {
  return (
    <div>
      <div className={style.container} />
        <TextHeader />
        <NavOptionsHeader />
        <div className={style.colorPatch}/>
    </div>
  )
}

export default About
