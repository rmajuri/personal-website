import React from 'react'
import Typed from 'react-typed';
import style from './Name.module.css'

const Name = () => (
  <div className={style.container}>
      <Typed
      className={style.headingText}
      strings={['ROB MAJURI']}
      typeSpeed={200}
      loop={false}
      ></Typed>
      <Typed
      className={style.headingText}
      strings={['SOFTWARE DEVELOPER']}
      typeSpeed={200}
      loop={false}
      ></Typed>
  </div>
)

export default Name