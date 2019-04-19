import React from 'react'
import style from './About.module.css'



const About = () => {

  const p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  
  const spans = p.split('').map((word, i) => {
  return <span key={`word${i}`} className={style.wordExpand}>{word}</span>
  })

  return (
    <div className={style.aboutContainer}>
      <div className={style.headerContainer}>
      <h1 className={style.header}>About</h1>
      </div>
      <div className={style.photoAndImageContainer}>
        {/* <img
          className={style.robPhoto}
          src={require('../assets/rob.jpg')}
          alt="Photograph of Rob Majuri"
        /> */}
        <p className={style.robPhoto}>
        <div className={style.layer}/>
        {spans}
        </p>
        <p className={style.paragraph}>This is a biography...</p>
      </div>
    </div>
  )
}

export default About
