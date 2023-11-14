import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Style from './styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Aprendiendo SASS</h1>
      </div>
      <div className='caja'>
        <h2>Encabezado</h2>
        <p>Este es el primer parrafo</p>
      </div>
      <div className='caja'>
        <h2>Encabezado</h2>
        <p>Hola es un parrafo</p>
      </div>
      <div className='caja-secundaria'>
        <h2>Encabezado</h2>
        <p>Este es el segundo parrafo</p>
      </div>
      <div className='caja-secundaria'>
        <h2>Encabezado</h2>
        <p>Hola es el tercer parrafo</p>
      </div>
    </>
  )
}

export default App
