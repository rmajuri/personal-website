import React, { useState, useEffect } from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import style from './Work.module.css'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import { Link } from 'react-router-dom'
import { projectData } from './Projects'


const Work = props => {
  const [projectNumber, setProjectNumber] = useState(0)
  const [projects] = useState(projectData)
  const [currentProject, setCurrentProject] = useState(projectData[0])
  const headerClasses = [style.header, style.hvrgrow]
  const VIDEO = <video></video>

  const handlePageFlipClick = direction => {
    let num 
    if (direction === 'left') {
      if (projectNumber === 0) {
        num = projects.length - 1
      } else {
        num = projectNumber - 1
      }
    } else {
      if (projectNumber === projects.length - 1) {
        num = 0
      } else {
        num = projectNumber + 1
      }
    }
    setProjectNumber(num)
    setCurrentProject(projects[num])
    console.log(currentProject)
    console.log(projectNumber)
  }

  return currentProject.projectTitle ? (
    <div>
      <div className={style.container}>
        <Link to="/">
          <h1 className={headerClasses.join(' ')}>RM</h1>
        </Link>
        <TextHeader />
        <NavOptionsHeader />
        <div className={style.colorPatch} />
        <div className={style.arrowLeft}>
          <i className='fa fa-arrow-circle-left' onClick={() => handlePageFlipClick('left')} />
        </div>
        <div className={style.imgAndDescContainer}>
          <h1 className={style.videoTitle}>{currentProject.projectTitle}</h1>
          <div className={style.videoContainer}>
            <VIDEO className={style.video} controls>
              {/* <source
                src={currentProject.videoURL}
                type={currentProject.videoType}
                className={style.clickChordVideo}
              /> */}
            </VIDEO>
          </div>
          <div className={style.description}>
          { currentProject.deployedAt.length ? 
            <p>
              <span className={style.boldText}>Deployed at: </span>
              <span>
                <a href={currentProject.deployedAt} target="blank">
                  {currentProject.deployedAt}
                </a>
              </span>
          </p> : null}
          { currentProject.github.length ? 
            <p>
              <span className={style.boldText}>GitHub Repository: </span>
              <span>
                <a href={currentProject.github} target="blank">
                  {currentProject.github}
                </a>
              </span>
          </p> : null}
            <p>{currentProject.description}</p>
            <p>
              <span className={style.italic}>{currentProject.note}</span>
            </p>
          </div>
        </div>
        <div className={style.arrowRight}>
        <i className='fa fa-arrow-circle-right' onClick={() => handlePageFlipClick('right')} />
        </div>
      </div>
      </div>
  ) : null
}

export default Work