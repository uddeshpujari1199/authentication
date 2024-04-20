import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import app from './Firebase';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { NavLink } from "react-router-dom";


function App() {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  const auth=getAuth();

async function handalSubmit(){

    const result=await createUserWithEmailAndPassword(auth,email,password);
   alert(email.concat(' user is created'))
   setEmail('')
   setPassword('')
  }
  return (
    <div className="App">
      <h1>Sign Up page</h1>
      <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={()=>handalSubmit()}>Sign up</button>
      <span>are you all ready user? <NavLink to='/signin'><span className='signIN'> Sign In</span></NavLink></span>
    </div>
  );
}

export default App;
