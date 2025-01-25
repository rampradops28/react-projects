import React, { useEffect } from 'react'
import { useState } from 'react'
const AdviceApp = () => {

    const [advice, setAdvice] = useState("Please Click Button to Get Advice")
    const [count, setCount] = useState(0)

    const getAdvice = async () => {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c+1)
    }

    useEffect(function() {
        getAdvice();
    },[])

  return (
     <>
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
           <Counter count={count}/>
        </div>
     </>
  )
}

export default AdviceApp

function Counter(props) {
    return (
        <p>You have read <b>{props.count}</b> peices of advice</p>
    )
}