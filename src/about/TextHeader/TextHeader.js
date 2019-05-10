import React, { useState, useEffect } from 'react'
import style from './TextHeader.module.css'
import { splitOnStarHeader, shuffleQuotes } from '../../utility/utility'
import { textBlock } from '../../text/text-block'
import { isMobile } from 'react-device-detect'

const TextHeader = () => {
  const [quotes, setQuotes] = useState([])
  const limit = isMobile ? 30 : 100

  useEffect(() => {
    const quoteArray = shuffleQuotes(splitOnStarHeader(textBlock, limit))
    setQuotes(quoteArray)
  }, [])

  const createSpans = quoteArray => {
    return quoteArray.map((quote, i) => {
      return (
        <span key={`quote${i}`} className={style.sentence}>
          {quote}
        </span>
      )
    })
  }

  return (
    <div>
      <p className={style.container}>{createSpans(quotes)}</p>
    </div>
  )
}

export default TextHeader
