import React from 'react'

import Display from '../components/display'
import Keyboard from '../components/keyboard'
import Key from '../components/key'

import useCalculator from '../components/hooks/useCalculator'

const Calculator = () => {
  const calculator = useCalculator()
  return (
    <div className='w-[500px] border-gray-600 border rounded-md'>
        <Display />
        <Keyboard>
            <div className="keyboard__row">
                 <Key label={'C'} style={"button--clear"} handleClick={calculator.clearDisplay}/>
            </div>
            <div className="keyboard__row">
                <Key label={'7'} style={"button--number" } handleClick={() => calculator.writeNumber('7')}/>
                <Key label={'8'} style={"button--number"} handleClick={() => calculator.writeNumber('8')}/>
                <Key label={'9'} style={"button--number"} handleClick={() => calculator.writeNumber('9')}/>
                <Key label={' ÷ '} style={"button--operation"} handleClick={() => calculator.writeOperator(' ÷ ')}/>
            </div>
            <div className="keyboard__row">
                <Key label={'4'} style={"button--number" } handleClick={() => calculator.writeNumber('4')}/>
                <Key label={'5'} style={"button--number"} handleClick={() => calculator.writeNumber('5')}/>
                <Key label={'6'} style={"button--number"} handleClick={() => calculator.writeNumber('6')}/>
                <Key label={' × '} style={"button--operation"} handleClick={() => calculator.writeOperator(' × ')}/>
            </div>
            <div className="keyboard__row">
                <Key label={'1'} style={"button--number" } handleClick={() => calculator.writeNumber('1')}/>
                <Key label={'2'} style={"button--number"} handleClick={() => calculator.writeNumber('2')}/>
                <Key label={'3'} style={"button--number"} handleClick={() => calculator.writeNumber('3')}/>
                <Key label={' - '} style={"button--operation"} handleClick={() => calculator.writeOperator(' - ')}/>
            </div>
            <div className="keyboard__row">
                <Key label={'0'} style={"button--number" } handleClick={() => calculator.writeNumber('0')}/>
                <Key label={'.'} style={"button--number"} handleClick={() => calculator.writeNumber('.')}/>
                <Key label={'='} style={"button--equal"} handleClick={calculator.execute}/>
                <Key label={' + '} style={"button--operation"} handleClick={() => calculator.writeOperator(' + ')}/>
            </div>
        </Keyboard>
    </div>
  )
}

export default Calculator