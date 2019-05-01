import React from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import style from './Work.module.css'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import Typed from 'react-typed'

const Work = props => {
  return (
    <div>
      <div className={style.container}>
        <TextHeader />
        <NavOptionsHeader />
        <div className={style.colorPatch} />
        <div className={style.imgAndDescContainer}>
        <div className={style.videoContainer}>
        <Typed
        className={style.videoTitle}
          strings={['<h2>Click-Chord</h2>']}
          typeSpeed={40}
          loop={false}
        />
        <video className={style.video} controls>
          <source src="click-chord.mp4" type="video/mp4"
          className={style.clickChordVideo}
          />
        </video>
        </div>
        <div className={style.description}>
        <p><span>Deployed at: </span><span>http://clickchord.herokuapp.com/</span></p>
        <p><span>GitHub Repository: </span><span>https://github.com/rmajuri/click-chord</span></p>
        <p>Winner of People's Choice Award at Fullstack Academy of Code. Click-Chord is an app project I undertook to learn about browser audio APIs. The app renders out clickable boxes that each trigger a different musical chord within the scale the user has selected. To provide users with enjoyable instrumentation to interact with, I used the Tone.js library, which converts HTML5's oscillator sounds into "synthesizer" tones. The Tone.js library also provided an API that allowed me to develop a "Rhythm Maker" interface that lets users build their own drum sequences to backdrop chord progressions they create. Alternatively, users can toggle this feature to a "Rhythm Player" that offers pre-built rhythms.</p>
        <p><span>*Note: Not compatible with some web browsers. Best viewed using Google Chrome.</span></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Work
