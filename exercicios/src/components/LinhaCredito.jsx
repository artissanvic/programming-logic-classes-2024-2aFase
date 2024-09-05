import React from 'react'

function LinhaCredito() {
    const [resultado, setResultado] = useState()

    function descobrir(){


        let nota1 = Number(prompt('digite o 1° numero'))
        let nota2 = Number(prompt('digite o 2° numero'))
    }

  return (
    <div>
        <h2> esse botao irá informar se o empréstimo pode ser concedido</h2>
      <button onClick={descobrir}>descobrir</button>
    </div>
  )
}

export default LinhaCredito
