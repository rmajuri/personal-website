// export const splitOnStar = quoteBlock => {
//   return quoteBlock.split('*').map(quote => quote.trim())
// }
export const splitOnStar = quoteBlock => {
  return quoteBlock.split('*').map(quote => quote.trim())
}

export const joinAndPushIntoArray = quoteArray => {
  return [quoteArray.join(' ')]
}

export const shuffleQuotes = arr => {
  let rand
  let temp
  let i = arr.length
  while (i--) {
    rand = Math.floor(Math.random() * i)
    temp = arr[i]
    arr[i] = arr[rand]
    arr[rand] = temp
  }
  return arr
}
