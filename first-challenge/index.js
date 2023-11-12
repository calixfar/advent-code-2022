const processedData = require('./process-input')

let data = {
  biggestSummationIndex: 0,
  summation: 0
}

const history = {}

processedData.forEach((item, index) => {
  const summation = item.reduce((value, currentValue) => {
    return value + currentValue
  }, 0)

  if (index === 0) {
    data.summation = summation

    return
  }

  if (summation > data.summation) {
    data.biggestSummationIndex = index
    data.summation = summation

    history[index] = {...data}
  }
})

console.log(data)