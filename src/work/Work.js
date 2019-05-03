import React, { useState, useEffect } from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import style from './Work.module.css'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

const Work = props => {
  const [projectNumber, setProjectNumber] = useState(0)
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState({})
  const headerClasses = [style.header, style.hvrgrow]
  const rightIconClasses = ['fa', 'fa-arrow-circle-right']
  const leftIconClasses = ['fa', 'fa-arrow-circle-left']

  return (
    <div>
      <div className={style.container}>
      <Link to="/">
      <h1 className={headerClasses.join(' ')}>RM</h1>
      </Link>
        <TextHeader />
        <NavOptionsHeader />
        <div className={style.colorPatch} />
        <div className={style.imgAndDescContainer}>
          <i className={leftIconClasses.join(' ')} />
          <div className={style.videoContainer}>
            <Typed
              className={style.videoTitle}
              strings={['Click-Chord']}
              typeSpeed={40}
              loop={false}
            />
            <video className={style.video} controls>
              <source
                src="click-chord.mp4"
                type="video/mp4"
                className={style.clickChordVideo}
              />
            </video>
          </div>
          <div className={style.description}>
            <p>
              <span className={style.boldText}>Deployed at: </span>
              <span><a href="http://clickchord.herokuapp.com" target="blank">http://clickchord.herokuapp.com</a></span>
            </p>
            <p>
              <span className={style.boldText}>GitHub Repository: </span>
            <span><a href="https://github.com/rmajuri/click-chord" target="blank">https://github.com/rmajuri/click-chord</a></span>
            </p>
            <p>
              Winner of People's Choice Award at Fullstack Academy of Code.
              Click-Chord is an app project I undertook to learn about browser
              audio APIs. The app renders out clickable boxes that each trigger
              a different musical chord within the scale the user has selected.
              To provide users with enjoyable instrumentation to interact with,
              I used the Tone.js library, which converts HTML5's oscillator
              sounds into "synthesizer" tones. The Tone.js library also provided
              an API that allowed me to develop a "Rhythm Maker" interface that
              lets users build their own drum sequences to backdrop chord
              progressions they create. Alternatively, users can toggle this
              feature to a "Rhythm Player" that offers pre-built rhythms.
            </p>
            <p>
              <span className={style.italic}>
                *Note: Not compatible with some web browsers. Best viewed using
                Google Chrome.
              </span>
            </p>
          </div>
          <i className={rightIconClasses.join(' ')} />
        </div>
      </div>
    </div>
  )
}

export default Work
