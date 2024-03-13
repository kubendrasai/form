import { createContext,useState } from "react";
import React from 'react'

export const appContext=createContext()
const title="STUDENTS LIST"

const Context = ({children}) => {
    const [list,setList]=useState([{id:1,name:"sai",course:"react"},{id:2,name:"vinay",course:"servicenow"}])
   
    
    
  return (
    <appContext.Provider value={{title,list,setList}}>
        {children}
    </appContext.Provider>
  )
}

export default Context