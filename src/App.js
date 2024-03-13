
import './App.css';
import { useContext } from 'react';
import { appContext } from './Context';
import Table from './Table';
import {Link} from 'react-router-dom'

function App() {
  const {title,list,setList}=useContext(appContext)
  return (
    <div className="App">
     <h1>{title}</h1>
     <hr></hr>
     <Table />
     <Link to="/add">Add Student</Link>
    </div>
  );
}

export default App;
