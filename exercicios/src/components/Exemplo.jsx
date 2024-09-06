import { useState } from "react"
import './Exemplo.css'

function Exemplo() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){

        setResultado(resultado+1) }

        function diminuir(){

            setResultado(resultado-1) }

  return (
    <div className="exemplo_container">

      <h3>Diminuir e aumentar o numero(exemplo)</h3>
        <button onClick={aumentar}>+</button>
        {resultado}
        <button onClick={diminuir}>-</button>
  
    </div>
  )
}

export default Exemplo