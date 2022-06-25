import React from 'react'
import PropTypes from 'prop-types'

function Boton({operation,setOperation}) {
  return (
    <>
        <button onClick={()=>setOperation(operation)} className="btn btn-outline-light m-2 ">{operation}</button>
    </>
  )
}

Boton.propTypes = {}

export default Boton
