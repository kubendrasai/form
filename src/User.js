import React from 'react'
import './User.css'
import {useContext,useState,useEffect} from 'react'
import {appContext} from './Context'
import {useParams, useNavigate} from 'react-router-dom';

function User() {
  const {list,setList}=useContext(appContext)
  const navigate=useNavigate();
  const { id } = useParams();
  
  let [value,setValue]=useState({id:id,name:"",course:""})
  useEffect(()=>{
    if(id!==undefined && id!==null){
      let item=list.filter(x => (x.id===parseInt(id)));
      
      let name=item[0].name
      let course=item[0].course
      setValue({...value,name,course})
    }
  },[])
 

  const handleSubmit=(e)=>{
    e.preventDefault();
    let name=value.name
    let course=value.course

    if(id!==undefined && id!==null){
      let newList= list.map((item)=>(
        (item.id === parseInt(id))? {...item,name,course}:item  
      ))     
      setList(newList)
      
    navigate('/');
    }
    else{
      let length=list.length+1
      
      let newItem={id:length,name,course}
      setList([...list,newItem])
      
      
      navigate('/');
    }
      

  }
    const handleName=(e)=>{
      setValue({...value,name:e.target.value})
      }
      const handleCourse=(e)=>{
        setValue({...value,course:e.target.value})
  
      }  

  return (
   <div>
     <h1>USER details</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Name" value={value.name} onChange={handleName} placeholder="Name" required /><br/>
        <input type="text" name="Course" value={value.course} onChange={handleCourse} placeholder="Course" required />
        <button> submit </button>
      </form>
    </div>
    
  )
}

export default User