import React from 'react'
import { useState } from 'react'
import './Media.css'


function Media() {
    const [resultado, setResultado] = useState()

    function calcularMedia(){

        let nota1 = Number(prompt('digite o 1° numero'))
        let nota2 = Number(prompt('digite o 2° numero'))

        let media = (nota1+nota2)/2

        setResultado(media)
    }

  return (
    <div className='media_container'>

        <h2>Exercicios para calcular media de dois numeros</h2>

        <button onClick={calcularMedia}>calcular</button>

        <div>
            
        Media: {resultado}
      
        </div>
    </div>
  )
}

export default Media
