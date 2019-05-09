import React from 'react'
import style from './Name.module.css'

const Name = () => (
  <div className={style.container}>
    <div className={style.textContainer}>
      <h2 className={style.headingText}>ROBERT MAJURI</h2>
      <h2 className={style.headingText}>SOFTWARE DEVELOPER</h2>
    </div>
    <div className={style.githubIcon}>
      <a href="https://github.com/rmajuri" target="blank">
        <i className="fab fa-github" />
      </a>
    </div>
  </div>
)

export default Name
