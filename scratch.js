import React from 'react'
import TextHeader from './TextHeader/TextHeader'
import style from './About.module.css'
import NavOptionsHeader from './NavOptions/NavOptionsHeader'
import { bio } from './AboutText'
import { Link } from 'react-router-dom'
  

  export const projectData = [
    {
      projectTitle: 'Click-Chord',
      deployedAt: 'http://clickchord.herokuapp.com',
      github: 'https://github.com/rmajuri/click-chord',
      tech: 'React, Tone.js, Node, Express, Webpack',
      description: `Click-Chord offers users the ability to create synthesizer chord progressions in the browser.
      Users can choose between a "Rythm Maker" and "Rhythm Builder" to backdrop their chord progressions with percussion`,
      note: `*Note: Not compatible with some web browsers. Best viewed using
      Google Chrome.`,
      videoURL: 'click-chord.mp4',
      videoType: 'video/mp4',
    },
    {
      projectTitle: 'Indego Bike Pulse',
      deployedAt: 'http://indegobikepulse.herokuapp.com',
      github: '',
      tech: 'JavaScript, jQuery, HTML, CSS, Node, Express, Webpack',
      description: `Indego is Philadelphia's bike-sharing program. Using the Indego Bike Pulse app, users can find the Indego bike stations closest to where they are currently located. Clickable map markers prompt windows that tell users how many bikes and parking docks are available at each station.`,
      note: '',
      videoURL: 'indego.mp4',
      videoType: 'video/mp4',
    },
    {
      projectTitle: 'Catify',
      deployedAt: '',
      github: 'https://github.com/S-E-R-J/catify',
      tech: 'React Native, Redux, Firebase',
      description: `I collaborated with three other developers to create a mobile messaging app called Catify. To build this app, we used React Native and the Expo.io toolchain. Among my particular contributions to the project was developing UI using React Native, as well as Native Base and Expo libraries. I helped develop our app's navigation architecture, messaging interface, and photo-generation feature. I also integrated Redux into our application.`,
      note: '',
      videoURL: 'https://www.youtube.com/embed/RogIJkblx04',
      videoType: 'YouTube',
    },
  ]

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
        <section className={style.bio}>
        <p>I&apos;ve always had a restless urge for creativity and analytical thinking.</p>
        <p>Whether teaching myself how to write music or how to write a novel, I love building something new.</p>
        <p>This urge to create and problem-solve is what drove me to pursue a career in software development.
        Coding offers me the boundless canvas for creativity that I was always searching for. 
        </p>
        <p>And the most rewarding part is getting to work on projects that help others reach their goals.</p>
        <p>When I'm not writing code, I like making noise in GarageBand, nerding out by talking about or reading books, and exploring the historic parts of Philadelphia.</p>
        <p>Let it be known that I am an unashamed cat enthusiast, with the calendar on my desk to prove it.</p>
        </section>
      </div>
    </div>
  )
}

export default About
