import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../contexts/CaptainContext';

const Captainlogin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {captain,setCaptain}=useContext(CaptainDataContext)
    const submithandler=async(e)=>{
      e.preventDefault();
      const captain={
        email:email,
        password:password
      }
      const response=await axios.post('http://localhost:4000/captains/login',captain);
      if(response.status===201){
        const data=response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }
      setEmail("")
      setPassword("")
    }
  
  return (
    <div>
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
<p className='text-center'>Join as Fleet?  <Link to='/captain-signup' className='text-blue-600'>Register as Captain</Link></p>
      </form>
      </div>
      <div>
        <Link
        to='/login'
          className='bg-[#b5622d] flex justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
>Sign in as User</Link>
      </div>
    </div>
    </div>
  )
}

export default Captainlogin
