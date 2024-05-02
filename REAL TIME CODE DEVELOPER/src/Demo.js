import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  

  const[form,setForm]=useState({});
  const handleForm=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json();
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Username</span>
        <input type="text" name="name" onChange={handleForm}/>
        <span>Password</span>
        <input type="text" name="password" onChange={handleForm}/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;