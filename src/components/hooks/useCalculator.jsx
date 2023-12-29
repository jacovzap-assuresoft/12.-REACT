import { useEffect, useState } from 'react'

const useCalculator = () => {
  const [display, setDisplay] = useState(null)
  const [operations, setOperations] = useState([])
  const [numbers, setNumbers] = useState([])
  const [displayShown, setDisplayShown] = useState([])
  const [temporaryNumber, setTemporaryNumber] = useState('')

  useEffect(() => {
    setDisplay(document.getElementById('display'))
  }, [])

  useEffect(() => {
    if (!display) return

    const displayString = displayShown.join('')
    display.innerText = displayString
  }, [displayShown])

  const validateNumberAndPush = () => {
    if (temporaryNumber !== '') {
      numbers.push(temporaryNumber)
      setTemporaryNumber('')
    }
  }

  const writeNumber = value => {
    setTemporaryNumber(temporaryNumber + value)
    writeInCalculator(value)
  }

  const writeOperator = value => {
    validateNumberAndPush()
    setOperations( [...operations, value.trim()] )
    writeInCalculator(value)
  }

  const writeInCalculator = value => {
    setDisplayShown([...displayShown, value])
  }

  const clearDisplay = () => {
    setDisplayShown([])
    setOperations([])
    setNumbers([])
    setTemporaryNumber('')

    display.innerText = '0'
  }

  const calculate = (operationsArr, numbersArr) => {
    console.log(operationsArr, numbersArr)
    if (numbersArr.length === 1) return numbersArr[0]
    else {
      let result = 0

      const operationIndex = operationsArr.indexOf('×')
      if (operationIndex !== -1) {
        result = numbersArr[operationIndex] * numbersArr[operationIndex + 1]
        numbersArr.splice(operationIndex, 2, result)
        operationsArr.splice(operationIndex, 1)
        return calculate(operationsArr, numbersArr)
      }

      const operationIndex2 = operationsArr.indexOf('÷')
      if (operationIndex2 !== -1) {
        result = numbersArr[operationIndex2] / numbersArr[operationIndex2 + 1]
        numbersArr.splice(operationIndex2, 2, result)
        operationsArr.splice(operationIndex2, 1)
        return calculate(operationsArr, numbersArr)
      }

      const operationIndex3 = operationsArr.indexOf('+')
      if (operationIndex3 !== -1) {
        result =
          Number(numbersArr[operationIndex3]) +
          Number(numbersArr[operationIndex3 + 1])
        numbersArr.splice(operationIndex3, 2, result)
        operationsArr.splice(operationIndex3, 1)
        return calculate(operationsArr, numbersArr)
      }

      const operationIndex4 = operationsArr.indexOf('-')
      if (operationIndex4 !== -1) {
        console.log('=')
        result = numbersArr[operationIndex4] - numbersArr[operationIndex4 + 1]
        numbersArr.splice(operationIndex4, 2, result)
        operationsArr.splice(operationIndex4, 1)
        return calculate(operationsArr, numbersArr)
      }
      return result
    }
  }

  const execute = () => {
    validateNumberAndPush()
    const result = calculate([...operations], [...numbers])
    console.log(result)

    setDisplayShown([result])

    display.innerText = result
  }

  return {
    numbers,
    operations,
    validateNumberAndPush,
    writeNumber,
    writeOperator,
    writeInCalculator,
    clearDisplay,
    calculate,
    execute
  }
}

export default useCalculator
