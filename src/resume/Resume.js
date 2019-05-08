import React from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import { Link } from 'react-router-dom'
import style from './Resume.module.css'
import { isMobile } from 'react-device-detect'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`

const Resume = () => {
  const headerClasses = [style.header, style.hvrgrow]

  return (
    <div>
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
        {!isMobile ? (
          <div className={style.docWrapper}>
          <Document
            loading=""
            file="Robert_Majuri_Resume.pdf"
            className={style.pdf}
          >
            <Page pageNumber={1} width={800} />
          </Document>
          </div>
        ) : (
          <div className={style.docWrapper}>
          <Document
            loading=""
            file="Robert_Majuri_Resume.pdf"
          >
            <Page className={style.pdf} pageNumber={1} width={325} />
          </Document>
          </div>
        )}
      </div>
    </div>
  )
}

export default Resume
