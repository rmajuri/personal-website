import React from 'react'
import TextHeader from '../about/TextHeader/TextHeader'
import NavOptionsHeader from '../about/NavOptions/NavOptionsHeader'
import { Link } from 'react-router-dom'
import style from './Resume.module.css'
import { isMobile } from 'react-device-detect'
import { Document, Page, pdfjs } from 'react-pdf'
// import { MobilePDFReader } from 'react-read-pdf'
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
        { !isMobile ?
        <div className={style.downloadArrow}>
          <a
            href="Robert_Majuri_Resume.pdf"
            download
            width="100%"
            height="100%"
          >
            <i className="fas fa-arrow-alt-circle-down" />
          </a>
        </div> : 
        <div>
          <div>
            <h2>Download resume.</h2>
          </div>
          <div className={style.downloadArrow}>
          <a
            href="Robert_Majuri_Resume.pdf"
            download
            width="100%"
            height="100%"
          >
            <i className="fas fa-arrow-alt-circle-down" />
          </a>
        </div> 
        </div>
        }
        {!isMobile ? (
          <div
            className={style.docWrapper}
            style={{ border: '10px solid rgba(247, 210, 210, 0.1)' }}
          >
            <Document
              loading=""
              file="Robert_Majuri_Resume.pdf"
              className={style.pdf}
            >
              <Page pageNumber={1} width={800} />
            </Document>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Resume
