import { useState, createContext } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import Cuenta from './components/Cuenta.jsx'

export const pedidosContext = createContext(null)

function App() {
  const [pedidos, setPedidos] = useState([
  ])

  return (
    <>
      {/*
      Header
      Tarjetas  Cuenta
      */}
      <header>Food App</header>
      <pedidosContext.Provider value={{ pedidos, setPedidos }}>
        <div className='coso'>
          <Menu />
          <Cuenta />
        </div>
      </pedidosContext.Provider>
    </>
  )
}

export default App
