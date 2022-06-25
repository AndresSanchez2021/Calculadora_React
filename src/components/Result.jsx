import React from 'react'
import PropTypes from 'prop-types'

function Result({numero1, numero2, operation}) {
  
  const finalResult = ()=>{
    switch (operation) {
      case "+":
        return numero1 + numero2;
        break;
      case "-":
        return numero1 - numero2;
        break;
      case "*":
        return [numero1 * numero2];
        break;
      case "/":
        return numero1 / numero2;
        break;
    
      default:
        return numero1 + numero2;
        break;
    }
  }

  return (
    <>
      <label htmlFor="result">
        <span><h2>Resultado: </h2></span>
        <output value={finalResult} name="result"><h3>{finalResult()}</h3></output>
      </label>
    </>
  )
}
Result.propTypes={
  numero1:PropTypes.number,
  numero2:PropTypes.number
}
export default Result
