import { useState,useEffect } from 'react'
import './App.css'
import List from './List';
import Form from './Form';
import Tables from './Tables';
 
function App() {
   
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([]);

  useEffect( () => {
      const fetchItem = async () => {
        try{
          const response = await fetch(`${API_URL}${reqType}`);
          const data = await response.json();
          console.log(data)
          setItems(data)
        } catch(err){
          console.log(err)
        }
      }
      fetchItem();
  },[reqType])

  return (
    <>
      <div className='App'>
        <Form 
          reqType={reqType} setReqType={setReqType}
        />
        <List  items={items} />
        {/* <Tables items={items}/> */}
      </div>
     
    </>
  );
}

export default App
