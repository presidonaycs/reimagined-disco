import React, { useState, useEffect, createContext } from 'react';

export const SwapTableContext = createContext();


const SwapTableContextProvider = (props) => {
 
   const [table6, setTable6] = useState(true)
   const [table10, setTable10] = useState(false)

   const [table5, setTable5] = useState(true)
   const [table5A, setTable5A] = useState(false)

   const [show5F1, setShow5F1] = useState(true)
   const [show5F2, setShow5F2] = useState(false)
   const [show5F3, setShow5F3] = useState(false)

   const [sideValue, setSideValue] = useState(0)

   const handleShow5F1 =()=>{
    setShow5F1(true)
      setShow5F2(false)
      setShow5F3(false)

   }
   const handleShow5F2 =()=>{
    setShow5F1(false)
    setShow5F2(true)
    setShow5F3(false)
}
const handleShow5F3 =()=>{
  setShow5F1(false)
  setShow5F2(false)
  setShow5F3(true)
}

   const handleTable6 =()=>{
    setTable6(true)
    setTable10(false)
   }
   const handleTable10 =()=>{
    setTable6(false)
    setTable10(true)
   }

   const handleTable5 =()=>{
    setTable5(true)
    setTable5A(false)
   }
   const handleTable5A =()=>{
    setTable5(false)
    setTable5A(true)
   }

   const handleSideValue =(index)=>{
   
    console.log(index)

    switch (index.key>0) {
      case index.key==12: 
     
      handleShow5F1()
      break;
      
      case index.key==13: 
     
     handleShow5F2()
      break;
      
      
      case index.key==14: 
      
      handleShow5F3()
      break;
      
      default:
        handleShow5F1()
        // {handleShow5F1()}
   }
   }
  return (
      
    <SwapTableContext.Provider
    
    value = {{table6, table10,handleTable6,handleTable10,
      show5F1,show5F2,show5F3,handleShow5F1,handleShow5F2,handleShow5F3,
      sideValue, handleSideValue,
      table5,table5A,handleTable5,handleTable5A,
    
    
    }}>


{props.children}
    </SwapTableContext.Provider>

   
  );
};
export default SwapTableContextProvider;
