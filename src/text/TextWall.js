import React, { useState, useEffect } from 'react'
import style from './text.module.css'
import { splitOnStar, shuffleQuotes, joinAndPushIntoArray } from './utility/utility'
import { textBlock } from './text-block'
import Typed from 'react-typed';

const TextWall = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const quoteArray = shuffleQuotes(splitOnStar(textBlock))
    const arrayWithLongStringOfQuotes = joinAndPushIntoArray(quoteArray)
    console.log(arrayWithLongStringOfQuotes)
    setQuotes(arrayWithLongStringOfQuotes)
  }, [])

  const createSpans = quoteArray => {
    const classes = [style.sentence]
    return quoteArray.map((quote, i) => {
      return (<span key={`quote${i}`} className={classes.join(' ')}>
      {quote}
    </span>)
    })
  }

  return (
    <div >
    <p className={style.container}>
      {/* {createSpans(quotes)} */
                    <Typed 
                    className={style.sentence}
                    strings={quotes} 
                    typeSpeed={-100000} 
                />
    }
    </p>
    </div>
  )
}

export default TextWall
