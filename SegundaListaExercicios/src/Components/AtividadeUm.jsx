import React from 'react'
import { useState } from 'react'
import './AtividadeUm.css'

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
            `Tempo levado para percorrer ${distancia} km: ` +
            `${anos.toFixed(2)} anos, ` +
            `${(meses.toFixed(2) % 12)} meses, ` +
            `${(dias.toFixed(2) % 30)} dias, ` +
            `${(horas.toFixed(2) % 24)} horas, ` +
            `${(minutos.toFixed(2) % 60)} minutos, ` +
            `e ${(segundos.toFixed(2) % 60)} segundos. `
        )


    }


  return (
    <div className='staruber_container'>
      <h1>StarUber</h1>
<h3>Descubra quanto tempo levará para percorrer a distancia desejada</h3>
        <button onClick={calcular} >Calcular</button>
        {resultado}

    </div>
  )
}

export default AtividadeUm
