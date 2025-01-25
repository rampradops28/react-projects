import React, { useEffect, useRef, useState } from 'react'
import '../css/Login.css'
const Login = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const refContainer = useRef(null);

    useEffect(() => {
        console.log(refContainer);
        console.log(password);
    })
    const handleLogin = (e) => {
        e.preventDefault();
        const emailref = refContainer.current.value;
        console.log({email: emailref , password :password});
        setEmail('');
        setPassword('');
        refContainer.current.value='';
    }

    const [count , setCount] = useState(0);
    const isInitialRender = useRef(true);

    useEffect(() => {
        if(isInitialRender.current){
            isInitialRender.current = false;
            return;
        }
        console.log('useEffect run because count changed',count);
    },[count]);
    
  return (
     <>
        <div className="container">
            <h1>Login Form</h1>

            <form  className="form" onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                {/* uncontrolled input*/}
                <input 
                type="text" 
                ref = {refContainer}
                />
                <label htmlFor="password">password</label>
                {/* COntrolled input*/ }
                <input 
                type="password" 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                /> 

                <button className="btn-submit" type='submit'>Login</button>
            </form>
            <div className='container'>
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    setCount(count+1)
                }}>Increment</button>
            </div>
        </div>
     </>
  )
}

export default Login