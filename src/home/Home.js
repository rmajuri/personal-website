import React from 'react'
import TextWall from '../text/TextWall'
import NavOptions from '../NavOptions/NavOptions'
import style from './Home.module.css'

const Home = () => (
    <div className={style.homeContainer} >
      <TextWall />
      <NavOptions />
    </div>
)

export default Home