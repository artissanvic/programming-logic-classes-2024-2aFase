import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros712() {

    const[inputNumero, setInputNumero] = useState('')
    const[contagem, setContagem] = useState(0)
    const[mostrarResultado, setMostrarResultado]= useState(false)

    function lerNumero(){

if(inputNumero > 100 && inputNumero < 200){
  setContagem(contagem + 1)
}

    }

  return (
    <div>
        <Navbar/>

      <h1>Exercício 7.12</h1>

      <input type="text"
      value={inputNumero}
      onChange={(event) => setInputNumero(event.target.value)}
      />


      <button onClick={lerNumero} >LER</button>
      <button onClick={()=> setMostrarResultado(true)} >RESULTADO</button>

{ mostrarResultado && 
<div>
    <p>numeros na faixa 100 a 200: {contagem}</p>
</div>}

    </div>
  )
}

export default Numeros712
