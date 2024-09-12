import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import PaginaDois from './pages/PaginaDois'
import PaginaUm from './pages/PaginaUm'
import PaginaTres from './pages/PaginaTres'
import Render from './pages/Render'

function App() {

  const [pagina, setPagina] = useState()
 
  function mostrarHome(){
    setPagina(<Home/>)
  }
  return (
    <>

    <nav>
      <button onClick={mostrarHome} >Home</button>
      <button onClick={() => {setPagina(<PaginaDois/>)}} >Contato</button>
      <button onClick={() => {setPagina(<PaginaTres/>)}} >Terceira pagina</button>
      <button onClick={() => {setPagina(<Render/>)}} >Render</button>
    </nav>
 {pagina}
    </>
  )
}

export default App
