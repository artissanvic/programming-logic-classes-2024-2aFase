import React, { useState } from 'react'
import './LinhaCredito.css'

function LinhaCredito() {
  const [resultado, setResultado] = useState('')

  function descobrir() {

    let salario = Number(prompt('digite o seu salario'))
    let emprestimo = Number(prompt('digite o valor do empréstimo'))
    let prestacoes = Number(prompt('digite o número de prestações'))

    if (salario <= 0 || emprestimo <= 0 || prestacoes <= 0) {
      setResultado('As informações não foram corretamente informadas. Digite novamente.')

    } else {

      let porcentagemSalario = (30 * salario) / 100  // Para descobrir quanto é 30% do salario

      let cadaPrestacao = emprestimo / prestacoes

      if (cadaPrestacao < porcentagemSalario) {

        setResultado('Emprestimo pode ser realizado.')

      } else{

        setResultado('Emprestimo nao pode ser realizado.')

      }


    }
  }

  return (
    <div className='LinhaCredito_container' >
      <h2> esse botao irá informar se o empréstimo pode ser concedido</h2>
      <button onClick={descobrir}>descobrir</button>
      <p>{resultado}</p>
    </div>
  )
}

export default LinhaCredito
