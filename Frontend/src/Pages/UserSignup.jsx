import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [userData,setUserData]=useState({});
    const sumbitHandler=(e)=>{
      e.preventDefault();
      setUserData({
        username:{
          firstName:firstName,
          lastName:lastName
        },
        email:email,
        password:password

      })
      console.log(userData)
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');

    }



  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-4' src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png'/>
      <form onSubmit={sumbitHandler}>
      <h3 className='text-xl font-medium mb-2'>What's your name?</h3>
      <div className='flex gap-4 mb-6'>
        <input 
        required
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
        type='text' 
        placeholder='Firstname'/>
        <input 
        required
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
        type='text' 
        placeholder='Lastname'/>
        </div>
        <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
        <input 
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
        type='email' 
        placeholder='email@example.com'/>
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
        type='password' 
        placeholder='password'/>
        <button
        className='bg-[#111] mb-2 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
>Signup</button>
<p className='text-center'>Already have an account?  <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </form>
      </div>
    </div>
  )
}

export default UserSignup
