import React from 'react'
import { useState } from 'react'

//NAO FINALIZADO

function AtividadeUm() {
    const [resultado, setResultado] = useState()

    function calcular(){

        let distancia = Number(prompt('digite a distancia de um local ao outro (em quilometros)'))
        let velocidadeLuzPorSegundo = 300000

        //calculos

        let segundos = distancia / velocidadeLuzPorSegundo
        let minutos = segundos / 60
        let horas = segundos / 3600
        let dias = segundos / 86400
        let meses = dias / 30
        let anos = dias / 365

        setResultado(
            `Tempo levado para percorrer ${distancia} km:` +
            `${anos} anos ` +
            `${(meses % 12)} meses ` +
            `${(dias % 30)} dias ` +
            `${(horas % 24)} horas ` +
            `${(minutos % 60)} minutos ` +
            `${(segundos % 60)} segundos `
        )


    }


  return (
    <div>
<h3>Descubra quanto tempo levará a distancia desejada</h3>
        <button onClick={calcular} >Calcular</button>
        {resultado}

    </div>
  )
}

export default AtividadeUm
