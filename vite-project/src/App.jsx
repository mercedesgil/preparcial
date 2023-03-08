import { useState } from 'react'
import './App.css'
import { Form } from './assets/components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>pre parcial</p>
      <Form/>
    </div>
  )
}

export default App
