import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Userlogin = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [userData,setUserData]=useState({});
  const submithandler=(e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    console.log(userData)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-8' src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png'/>
      <form onSubmit={submithandler}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
        type='email' 
        placeholder='email@example.com'/>
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
        type='password' 
        placeholder='password'/>
        <button
        className='bg-[#111] mb-2 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
>Login</button>
<p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create an account</Link></p>
      </form>
      </div>
      <div>
        <Link
        to='/captain-login'
          className='bg-[#10b461] flex justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default Userlogin
