import React, { useState } from 'react'
import './App.css'
const NewRegFrm = () => {

    const [user, setUser] = useState({
        name: "Ram Pradop",
        age: 18,
        gender: "Male",
        isMarried: true,
        country: "India",
        bio: "Write something about yourself"
    });

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.type==="checkbox" ? e.target.checked : e.target.value;
        setUser({...user, [name]:value});
    }

  return (
     <>
        <table>
            <tr>
                <th>Name</th>
                <td>{user.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{user.age}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <th>IsMarried</th>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
            <tr>
                <th>Country</th>
                <td>{user.country}</td>
            </tr>
            <tr>
                <th>Bio</th>
                <td>{user.bio}</td>
            </tr>
        </table>

        <form>
            <input type="text"  placeholder='Full Name' value={user.name} name="name" onChange={changeHandler}/>
            <input type="number" placeholder='Age' value={user.age} name="age" onChange={changeHandler}/>
            <div className="gender">
                <label htmlFor='male'>
                    <input type="radio" name="gender" id="male" checked={user.gender == "Male"} onChange={changeHandler} value="Male"/>
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" id="female" 
                    checked={user.gender == "Female"} onChange={changeHandler} value="Female" />
                    Female
                </label>
            </div>
            <label htmlFor='isMarried'>
                <input type="checkbox" id="isMarried" checked={user.isMarried} name="isMarried" onChange={changeHandler}/>
                Is Married
            </label>
            <div className='select-div'>
                <label htmlFor="country">Select Country:</label>
                <select name="country" id="country" value={user.country} onChange={changeHandler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </div>
            <textarea name="bio" id="bio" cols="30" rows="5" placeholder='Write about You' value={user.bio} onChange={changeHandler} />
        </form>
     </>
  )
}

export default NewRegFrm