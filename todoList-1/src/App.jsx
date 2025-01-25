import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Additem from './Components/Additem'
import Searchitem from './Components/Searchitem'
import apiRequest from './Components/apiRequest'

function App() {
  
    const API_URL = 'http://localhost:3500/items';
    const [items ,setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const [search, setSearchItem] = useState('')
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {//useEffect is used to load the window based on fd []
      const fetchItems = async() => {
        try{
          const response = await fetch(API_URL) //READ operation(CRUD)
          console.log(response)
          if(!response.ok) throw Error('Data not received') //ok => less than 200 but error is 404 so ! throw error
          const listitem = await response.json()
          console.log(listitem)
          setItems(listitem)
          setFetchError(null)
        } catch(err){
          setFetchError(err.message)
        } finally{
          setIsLoading(false)
        }
      }
      setTimeout(() => {
        (async() => await fetchItems()) ()
      },2000)
      
    },[])

    const addItem = async(item) => {
      const id = items.length ? items[items.length-1].id +1 : 1 // updating unique id
      const addNewItem = {id,checked:false,item}
      const listItem = [...items,addNewItem]
      setItems(listItem)
      // localStorage.setItem("todo-list",JSON.stringify(listItem))

      const postOptions =  {
        method : 'POST', //create operation(CRUD)
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(addNewItem)
      }

      const result = await apiRequest(API_URL,postOptions)
      if(result) setFetchError(result)
    }

    const handleCheck = async (id) => {
      const listItem = items.map((item) => (
        item.id === id ? {...item,checked:!item.checked} : item  //
      ));
      setItems(listItem)
      // localStorage.setItem("todo-list",JSON.stringify(listItem))

      const myItem = listItem.filter((item) => item.id === id)

      const updateOptions = {
        method : 'PATCH',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({checked:myItem[0].checked})
      }

      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,updateOptions)
      if(result) setFetchError(result)
    }

    const handleRemove = async (id) => {
      const removedItems = items.filter(item => item.id != id );
      setItems(removedItems)
      // localStorage.setItem("todo-list",JSON.stringify(removedItems))

      const deleteOption = { method : 'DELETE'}

      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,deleteOption)
      if(result) setFetchError(result)
    }
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
    }

  return (
    <>
      <Header title="Rampradop"/> 
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchitem 
        search={search}
        setSearchItem={setSearchItem}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error : ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}  
          handleCheck={handleCheck}
          handleRemove={handleRemove}
        />}
      </main>
      <Footer 
       length={items.length}
      /> 
    </>
  );
}

export default App
