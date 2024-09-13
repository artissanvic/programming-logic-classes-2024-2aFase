import { useState } from 'react'
import './App.css'
import DeMaior from './components/DeMaior'
import DeMenor from './components/DeMenor'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)

  
  const [dia, setDia] = useState()
  function ProcessarIdade() {

    if (inputIdade >= 18) {
      setMaior(true)
      setMenor(false)
    } else {
      setMenor(true)
      setMaior(false)
    }

  }
  function descobrirDia() {
    if (dia == 1) {
      setDia('domingo')
    } else if (dia == 2) {
      setDia('segunda')
    } else if (dia == 3) {
      setDia('terça')
    } else if (dia == 4) {
      setDia('quarta')
    } else if (dia == 5) {
      setDia('quinta')
    } else if (dia == 6) {
      setDia('sexta')
    } else if (dia == 7) {
      setDia('sabado')
    }else{
      setDia('valor incorreto')
    }
  }


  return (
    <>

      <div className='dia-semana-container'>

        <h1>Atividade dia da semana</h1>

        dia:
        <input type="number" className='diaSemana'
          value={ dia }

          onChange={(event) => { setDia(event.target.value) }} />

          <button onClick={descobrirDia} >descobrir o dia</button>

          R: { dia }

      </div>

      <div className='maior-menor-container'>

        <h1>Inputs</h1>

        idade:
        <input type="number" className='formularios'
          value={inputIdade}

          onChange={(event) => { setInputIdade(event.target.value) }} />

        <button onClick={ProcessarIdade} >Processar idade</button>

        {/* {inputIdade} */}

        {maior && <DeMaior />}
        {menor && <DeMenor />}

      </div>

    </>
  )
}

export default App
