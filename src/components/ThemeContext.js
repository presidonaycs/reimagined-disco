import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
   
   const [isOpen, setIsOPen] = useState(false)
  return (
      
    <ThemeContext.Provider value = {{isOpen}}>
{props.children}
    </ThemeContext.Provider>

   
  );
};
export default ThemeContextProvider;