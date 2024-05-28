import { useState } from 'react'
import navbar from './compolen/navbar';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='containerApp'>
      <navbar/>
      </div>

    
  )
}

export default App
