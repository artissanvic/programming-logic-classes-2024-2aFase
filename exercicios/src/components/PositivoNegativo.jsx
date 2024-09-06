import React from 'react'
import { useState } from 'react'
import './PositivoNegativo.css'


function PositivoNegativo() {
    const [resultado, setResultado] = useState()

    function definir(){

        let numero = Number(prompt('digite um numero'))

        if(numero > 0){
            setResultado('positivo👍😃')
        }else if(numero < 0){
            setResultado('negativo👎😡')
        }else{
            setResultado('nulo🤨✋')
        }
    }

  return (
    <div className='PositivoNegativo_container' >
      <h3>Descobrir se o numero é positivo, negativo ou nulo</h3>
      <button onClick={definir}>definir</button>
      <br />
      O número é: {resultado}
    </div>
  )
}

export default PositivoNegativo
