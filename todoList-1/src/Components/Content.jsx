 import Itemlist from "./Itemlist";
const Content = ({items,handleCheck,handleRemove}) => {

  // function handleNameChange(){
  //   let type = ["Start","Stop","End"]
  //   const imt = Math.floor(Math.random()*3)
  //   countValue(type[imt])
  // }
     
  // const [count , setCount] = useState(99)
  // const [name , countValue] = useState("Stop")

  // function incrementCount(){
  //   setCount(count => count+1)
  // }
  
  // function decrementCount(){
  //   setCount(count => count-1)
  // }
   
  return (
    <div>
        {items.length ?(
          <Itemlist
          items={items}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
          />
        ) : (
          <p>List is empty</p>
        )
        }
    {/* <p>lets {name} to learn react</p>
    <button onClick={handleNameChange}>Subscribe</button> */}
   {/* <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button> */}
    </div>
    
  );
}

export default Content