import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/EightBall'
import EightBall from './components/EightBall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EightBall />
    </>
  )
}

export default App
