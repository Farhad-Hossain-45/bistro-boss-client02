import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-center mt-10 p-6 text-4xl bg-blue-600 text-white'>amar sunar bagnla </p>
      <button className="btn btn-success">Success</button>
    </>
  )
}

export default App
