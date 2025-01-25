import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 
import Input from './Input'
import './App.css'
import squares from './Squares'
import Squares from './Squares'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDark, setIsDark] = useState(true)

  return (
    <>
       <Squares
          colorValue={colorValue}
          hexValue={hexValue}
          isDark={isDark}
       />
        <Input
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}
            isDark={isDark}
            setIsDark={setIsDark}
        />
        
    </>
  )
}

export default App
