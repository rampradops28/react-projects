import { useState } from 'react'
import RegFrm from './RegFrm.jsx'                                       
import './App.css'
import NewRegFrm from './NewRegFrm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <RegFrm /> */}
       <NewRegFrm />
    </>
  )
}

export default App
