import React from 'react'
import { useState } from 'react'


function PositivoNegativo() {
    const [resultado, setResultado] = useState()

    function definir(){

        let numero = Number(prompt('digite um numero para descobrir se é positivo negativo ou nulo'))

        if(numero > 0){
            setResultado('positivo👍😃')
        }else if(numero < 0){
            setResultado('negativo👎😡')
        }else{
            setResultado('nulo🤨✋')
        }
    }

  return (
    <div>
      <button onClick={definir}>descobrir</button>
      {resultado}
    </div>
  )
}

export default PositivoNegativo
