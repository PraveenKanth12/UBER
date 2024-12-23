import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../contexts/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [firstName,setFirstName]=useState('');
      const [lastName,setLastName]=useState('');
      const [vehicleColor, setVehicleColor] = useState('');
      const [vehiclePlate, setVehiclePlate] = useState('');
      const [vehicleType, setVehicleType] = useState('');
      const [vehicleCapacity, setVehicleCapacity] = useState('');

      const {captain,setCaptain}=useContext(CaptainDataContext);
      const sumbitHandler=(e)=>{
        e.preventDefault();
        const captainData={
          fullName:{
            firstName:firstName,
            lastName:lastName
          },
          email:email,
          password:password,
          vehicle:{
            color:vehicleColor,
            numberPlate:vehiclePlate,
            type:vehicleType,
            capacity:vehicleCapacity
          }
 }

        const response=axios.post('http://localhost:4000/api/captains/register',captainData);
        if(response.status===201){
          const data=response.data
          setCaptain(data.captain) //(here in the backend, we are getting the response as captain and token, so we are accessing them as response)
          localStorage.setItem('token',data.token)
          navigate('/captain-login')
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleType('');
        setVehicleCapacity('');
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-20 mb-4' src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png'/>
      <form onSubmit={sumbitHandler}>
      <h3 className='text-xl font-medium mb-2'>What's our Captain's name?</h3>
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
        <h3 className='text-lg font-medium mb-2'>What's our Captain's email?</h3>
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
        <h3 className='text-lg font-medium mb-1'>Vehicle Information</h3>
        <div className='flex flex-row gap-2'>
        <input 
          required
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
          type='text' 
          placeholder='Vehicle Color'/>
        <input 
          required
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
          type='text' 
          placeholder='Vehicle Plate'/>
          </div>
          <div className='flex flex-row gap-2'>
        <select 
          required
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'>
          <option value='' disabled>Select Vehicle Type</option>
          <option value='car'>Car</option>
          <option value='auto'>Auto</option>
          <option value='bike'>Bike</option>
        </select>
        <input 
          required
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
          type='number' 
          placeholder='Vehicle Capacity'/>
          </div>
        <button
        className='bg-[#111] mb-2 text-white font-semibold rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
>Create Captain account</button>
<p className='text-center'>Already have an account?  <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </form>
      </div>
      <p className='text-xs leading-tight mt-20 py-3 mb-2'>
      This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>
      </p>
    </div>
  )
}

export default CaptainSignup
