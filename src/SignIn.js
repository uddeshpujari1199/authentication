import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function SignIn() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
  
    const auth=getAuth();
  
  async function handalSubmit(){
  
      const result=await signInWithEmailAndPassword(auth,email,password);
     alert(email.concat(" Sign In"))
    }
    return (
      <div className="App">
        <h1>Sign In page</h1>
        <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>handalSubmit()}>Sign up</button>
        <span>are you not a user?<NavLink to='/'><span> Sign up</span></NavLink></span>
      </div>
    );
}

export default SignIn