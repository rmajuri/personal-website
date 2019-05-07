import React from 'react'
import TextWall from '../text/TextWall'
import NavOptions from '../NavOptions/NavOptions'
import style from './Home.module.css'
import Name from './Name/Name'

const Home = () => (
  <div className={style.homeContainer}>
    <TextWall />
    <Name />
    <NavOptions />
    <div className={style.githubIcon}>
      <a href="https://github.com/rmajuri" target="blank">
        <i className="fab fa-github" />
      </a>
    </div>
  </div>
)

export default Home
