import React from 'react'
import TextHeader from './TextHeader/TextHeader'
import style from './About.module.css'
import NavOptionsHeader from './NavOptions/NavOptionsHeader'
import { bio } from './AboutText'
import { Link } from 'react-router-dom'

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
