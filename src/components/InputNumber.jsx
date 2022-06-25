import React from 'react'
import PropTypes from 'prop-types'

function InputNumber({indexInput,setNumeros,numeros}) {
  const handleChange = (e) =>{
    setNumeros(
      {
        ...numeros,
        ["numero"+indexInput]:parseFloat(e.target.value)
      })
  }
  return (
    <div className="col-12 col-md-6">
        <label className="form-label" htmlFor={"numberInput"+indexInput}>
            Valor {indexInput}
            <input 
              className="form-control" 
              name={"numberInput"+indexInput} 
              id={"numberInput"+indexInput} 
              type="number" 
              placeholder="ingrese un valor" 
              value={numeros[indexInput]}
              onChange={handleChange}
            />
            
        </label>
    </div>
  )
}

InputNumber.propTypes = {}

export default InputNumber
