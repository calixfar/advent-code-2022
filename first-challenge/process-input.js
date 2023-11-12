const fs = require('fs')

const buffer = fs.readFileSync('./first-challenge/input.txt')
const rawData = buffer.toString()
let countBlankLines = 0

const processedData = rawData.split('\r').reduce((data, currentItem) => {
  if (currentItem === '\n"') {
    return data
  }

  if (!data.length) {
    data.push([])
  }


  if (currentItem !== '\n') {
    data[data.length - 1].push(Number(currentItem.replace('\n', ''))) 
  } else {
    data.push([])
    countBlankLines++
  }

  return data
}, [])

fs.writeFileSync('./first-challenge/data.js', `
  const data = [
    ${processedData.reduce((str, currentItem, currentIndex) => {
      str += `[${currentItem.toString()}]${currentIndex != processedData.length - 1 ? ',' : ''}`

      return str
    }, '')}
  ]
`)

module.exports = processedData