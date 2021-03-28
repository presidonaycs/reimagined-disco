import React, { useState, useEffect, createContext } from 'react';

export const DevTrainContext = createContext();


const DevTrainContextProvider = (props) => {
   
   const [itemName, setItemName] = useState('')
   const [description, setDescription] = useState('')
   const [quantity, setQuantity] = useState('')

   const itemName =()=>{
    setItemName(!show6)
   }
   const description =()=>{
    setDescription()
}
const quantity =()=>{
    setQuantity()
}
  return (
      
    <DevTrainContext.Provider value = {{setItemName, setDescription,setQuantity,itemName,description,quantity}}>
{props.children}
    </DevTrainContext.Provider>

   
  );
};
export default DevTrainContextProvider;