import React, { useEffect, useState } from 'react'

const Toggle = () => {

    const [toggle,setToggle] = useState(false);

    const toggleFn = () => {
        setToggle(!toggle);
        console.log(toggle);
    }

     
  return (
     <>
        <button onClick={toggleFn}>
            Click me
        </button>
        {toggle && <DemoComponent />}
     </>
  )
}

function DemoComponent(){
    console.log("Demo Component Mounted");


    useEffect(() => {
        console.log("Demo useEffect")

        const task = setInterval(() => {
            console.log('loading..')
        },1000)

        return () => {
            clearInterval(task);
            console.log('Interval Cleaned')
        }
        
        },[])

       
       return <h1>Demo Component</h1>
}

export default Toggle