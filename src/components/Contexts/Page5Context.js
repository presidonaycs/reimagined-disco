
import React, { useState, useEffect, createContext } from 'react';

export const Page5Context = createContext();


const Page5ContextProvider = (props) => {
   
   const [show5F1, setShow5F1] = useState(true)
   const [show5F2, setShow5F2] = useState(false)
   const [show5F3, setShow5F3] = useState(false)

   const handleShow5F1 =()=>{
    setShow5F1(!show5F1)
   }
   const handleShow5F2 =()=>{
    setShow5F2(!show5F2)
}
const handleShow5F3 =()=>{
  setShow5F3(!show5F3)
}
  return (
      
    <Page5Context.Provider value = {{show5F1}}>
{props.children}
    </Page5Context.Provider>

   
  );
};
export default Page5ContextProvider;
