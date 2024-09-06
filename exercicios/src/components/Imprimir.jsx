import React, { useState } from 'react'
import './Imprimir.css'

function Imprimir() {
    const [resultado, setResultado] = useState()

    function imprimindo(){

        let numero = Number(prompt('Digite um número'))


        let restoDivisao = numero % 2

        if(restoDivisao != 0 && numero <0){

            setResultado('Numero impar e negativo.')

        }else if(restoDivisao == 0 && numero <0){

            setResultado('Numero par e negativo.')

        }else if(restoDivisao != 0 && numero > 0){

            setResultado('Numero impar e positivo.')

        }else if(restoDivisao == 0 && numero >0){

            setResultado('Numero par e positivo.')

        }else(
            setResultado('Numero nulo')
        )

    }

  return (
    <div className='Imprimir_container' >
        <h3>Esse botao dira se seu numero é positivo, negativo, par ou impar</h3>
      <button onClick={imprimindo} >Imprimir</button>
      {resultado}
    </div>
  )
}

export default Imprimir

// 5.30 - Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.