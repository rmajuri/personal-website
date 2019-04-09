import React, { useState, useEffect } from 'react'
import style from './text.module.css'
import { splitOnStar, shuffleQuotes } from './utility/utility'
import { textBlock } from './text-block'

const TextWall = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const quoteArray = shuffleQuotes(splitOnStar(textBlock))
    console.log(quoteArray)
    setQuotes(quoteArray)
  }, [])

  const createParagraphs = quoteArray => {
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
    <p className={style.container}>
      {createParagraphs(quotes)}
    </p>
    </div>
  )
}

export default TextWall
