import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros713() {

    const [inputNumero, setInputNumero] = useState('')
    const [inputDoisNumero, setInputDoisNumero] = useState('')
    const [resultado, setResultado] = useState('false')
    const [numeroEntre, setNumeroEntre] = useState('')


    function lerNumeros() {

        numeroEntre = inputDoisNumero - inputNumero

        while (numeroEntre < inputDoisNumero && numeroEntre > inputNumero) {
            resultado = (numeroEntre - 1) % 2
            if (resultado != 0)
                setResultado(true)
        }
    }
}
return (
    <div>
        <Navbar />

        <h1>Exercício 7.12</h1>

        <h4>digite o menor numero</h4>
        <input type="text"

            value={inputNumero}
            onChange={(event) => setInputNumero(event.target.value)} />

        <h4>digite o maior numero</h4>
        <input type="text"
            value={inputDoisNumero}
            onChange={(event) => setInputNumero(event.target.value)} />


        <button onClick={lerNumeros} >LER</button>
        <button onClick={() => setResultado(true)} >RESULTADO</button>

        {resultado &&
            <div>
                <p>numeros pares: {setResultado}</p>
            </div>}

    </div>
)


export default Numeros713
