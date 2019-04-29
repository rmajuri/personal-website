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
  </div>
)

export default Home
