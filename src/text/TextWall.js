import React, { useState, useEffect } from 'react'
import style from './text.module.css'
import { splitOnStarHome, shuffleQuotes } from '../utility/utility'
import { textBlock } from './text-block'

const TextWall = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const quoteArray = shuffleQuotes(splitOnStarHome(textBlock))
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

export default TextWall
