import { useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState("")

  function randomMode() {
    const num = Math.floor(Math.random() * 2) + 1

    if (num === 1) {
      setMode("REC")
    }


    if (num === 2) {
      setMode("PARK")
    }
  }

  return (
    <>
      <div>
        <button onClick={randomMode}>
          Modus
        </button>
        {mode && <p>{mode}</p>}
      </div>
    </>
  )
}

export default App
