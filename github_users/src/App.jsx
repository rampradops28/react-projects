import React, { useState } from 'react'
import Company from './components/Company';
import './App.css'
import {companies} from './dataset';

const App = () => {
   const [selectedComp,setSelectedComp] = useState('CompanyName');

   const comp_Selection = (comp_Name) =>{
      setSelectedComp(comp_Name)
   }
  return (
     
     <div className="container">
        <h1 className="heading">Hello I am a {selectedComp} Developer</h1>

        {companies.map((items,index) => {
          return( <Company key={index}
           companyName={items.companyName}
           details={items.details}
           department={items.department}
           onComp_selection={comp_Selection}
          />)
          
         })}   
     </div>
  )
}

export default App
