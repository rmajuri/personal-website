import React from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import { Link } from 'react-router-dom'
import style from './Resume.module.css'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const headerClasses = [style.header, style.hvrgrow]

  return (
    <div className={style.backdrop}>
      <div className={style.container}>
        <Link to="/">
          <h1 className={headerClasses.join(' ')}>RM</h1>
        </Link>
        <TextHeader />
        <NavOptionsHeader />
        <div className={style.downloadArrow}>
          <a href="Robert_Majuri_Resume.pdf" download>
            <i className="fas fa-arrow-alt-circle-down" />
          </a>
        </div>
        {/* <embed src="Robert_Majuri_Resume.pdf" type="application/pdf" className={style.pdf} /> */}
        <Document 
        loading=""
        file="Robert_Majuri_Resume.pdf" 
        className={style.pdf}>
        <Page pageNumber={1} width={800}/>
        </Document>
      </div>
    </div>
  )
}

export default Resume
