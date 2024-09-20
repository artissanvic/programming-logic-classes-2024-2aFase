import React from 'react'
import { useState } from 'react'

function ManoJuca() {
  const [diasHospedado, setDiasHospedados] = useState()
  const [valor, setValor] = useState()

  //nao faz sentido nada disso, apague e refaça

  function descobrirValor(){

    let diasHospedado
    let diaria
    let valorHospedagem
    let envolvimentoEmocional
    let carteirinha
    let multa = 150
    let valorTotal

    if(diasHospedado <=5){
      diaria = 100
    }else if(diasHospedado>5 && diasHospedado <=10){
      diaria = 90
    }else if(diasHospedado>10){
      diaria=80
    }

    valorHospedagem = diasHospedado * diaria

    envolvimentoEmocional = (10*valorHospedagem)/100
    carteirinha=(15*valorHospedagem)/100

    valorTotal= valorHospedagem - envolvimentoEmocional - carteirinha + multa;

    setValor(valorTotal, )

  }

  return (
    <div>

      <h1>DESCUBRA QUANTO CUSTOU SUA HOSPEDAGEM</h1>

      <input type="number" 
      value={diasHospedado}
      onChange={(event) => {setDiasHospedados(event.target.value)}}/>

<button onClick={descobrirValor} >DESCOBRIR VALOR</button>

sua hospedagem custou: R$ {valor}

      
    </div>
  )
}

export default ManoJuca
