import React from 'react'
import TextHeader from './TextHeader/TextHeader'
import style from './About.module.css'
import NavOptionsHeader from './NavOptions/NavOptionsHeader'
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
        <p style={{fontWeight: 700}}>HI THERE.</p>
        <p>I&apos;m Rob.</p>
        <p>I&apos;ve always had a restless urge for creativity and analytical thinking.</p>
        <p>Whether teaching myself how to write <a href="https://soundcloud.com/theimpressionistmusic/tracks" target="blank">music</a> or how to write a <a href="https://www.goodreads.com/book/show/33786526-lucy-teaches-in-dolores" target="blank">novel</a>, I love building something new.</p>
        <p>This urge to create and problem-solve is what drove me to pursue a career in software development.
        Coding offers me the boundless canvas for creativity that I was always searching for. 
        </p>
        <p>After teaching myself the fundamentals of JavaScript, HTML, and CSS, I attended Fullstack Academy of Code, based in NY, for 4 months.</p>
        <p>Now I write applications using React, JavaScript, Node, Python, and more. Lately, I&apos;ve been excited about the framework <a href="https://www.gatsbyjs.org/" target="blank">Gatsby</a>.</p>
        <p>And the most rewarding part is getting to work on projects that help others reach their goals.</p>
        <p>When I&apos;m not writing code, I like making noise in GarageBand, nerding out by talking about or reading books, and exploring the historic parts of Philadelphia.</p>
        <p>Let it be known that I am an unashamed cat enthusiast, with the calendar on my desk to prove it.</p>
        </section>
      </div>
    </div>
  )
}

export default About
