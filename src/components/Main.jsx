import React, {useState}from 'react'
import PropTypes from 'prop-types'
import Result from './Result';
import InputNumber from './InputNumber';
import Boton from './Boton';

function Main(props) {
  const [result, setResult] = useState("");
  const [numeros, setNumeros] = useState({
    numero1:"",
    numero2:""
  });
  const [operation,setOperation]= useState("+");
  return (
    <div className="container text-center text-white p-5">
      <div className="row">
        <InputNumber indexInput="1" setNumeros={setNumeros} numeros={numeros}/>
        <InputNumber indexInput="2" setNumeros={setNumeros} numeros={numeros}/>
        
      </div>
    <div className="row p-2">
      <div class="d-grid gap-2 d-md-block">
        <Boton operation="+" setOperation={setOperation}/>
        <Boton operation="-" setOperation={setOperation}/>
        <Boton operation="*" setOperation={setOperation}/>
        <Boton operation="/" setOperation={setOperation}/>
      </div>
    </div>

    <div className="row">
        <Result operation={operation} numero1={numeros.numero1} numero2={numeros.numero2}/>
      </div>
        
    </div>
  )
}

Main.propTypes = {}

export default Main
