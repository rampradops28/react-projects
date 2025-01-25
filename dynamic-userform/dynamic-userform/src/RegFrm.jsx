import React, { useState } from 'react'

const RegFrm = () => {

    const [user, setUser] = useState({name: "Ram",age: 18})
    // const [userName, setUserName] = useState("Ram")
    // const [userAge, setUserAge] = useState(18)
     

    const changeName = (e) => {
    // setUser({...user, name:"Pradop"})
    //  userName=="Ram"?setUserName("Pradop") :setUserName("Ram")
    //  const newStateObject = {...user}
    //  newStateObject.name = e.target.value
    //  setUser(newStateObject)
    setUser((oldState) => {
        return {...oldState, name: e.target.value}
    })
    setUser({...user,[e.target.name]: e.target.value})//computed properties => set name="name" in component1(input1) , name="age" in component2(input2)
    }

    const changeAge = (e) => {
        // setUser({...user, age:21})
        // userAge==18?setUserAge(21) :setUserAge(18)
        // const newStateObject = {...user}
        // newStateObject.age = e.target.value
        // setUser(newStateObject)
        setUser((oldState) => {
            return {...oldState,age: e.target.value}
        })
    }
  return (
     <>
        <h3>
            {user.name},
            {user.age}
        </h3>
        <form>
            <input type="text" placeholder='Enter your name' value={user.name} onChange={changeName}/>

            <input type="text" placeholder='Enter your age' value={user.age} onChange={changeAge}/>
        </form>

        {/* <button  onClick={changeName}  >Namebtn</button>
        <button onClick={changeAge}  >Agebtn</button> */}
     </>
  )
}

export default RegFrm