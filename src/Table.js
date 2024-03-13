import React from 'react'
import "./Table.css"
import { useContext } from 'react'
import { appContext } from './Context'
import {useNavigate,Link} from 'react-router-dom'
const Table = () => {
    const {list,setList}=useContext(appContext)
    const handleDelete=(id)=>{
        const newList=list.filter((item)=>((item.id)!==id))
        setList(newList)
    }
    const rendered=list.map((item,index)=>( 
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.course}</td>
            <td><Link key={item.id} to={`/edit/${item.id}`}>edit</Link></td>
            <td><button key={item.id} onClick={()=>handleDelete(item.id)}>Delete</button></td>
            </tr>
    ))
  return (
    <div >
        <table >
            <tr><td>{"ID"}</td><td>{"NAME"}</td><td>{"COURSE"}</td></tr>
            
            {rendered}
            
        </table>
        <hr></hr>
       
    </div>
  )
}
export default Table;
