import React, { useContext, useEffect } from 'react'
import { CaptainDataContext } from '../contexts/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {
  const {captain,setCaptain,isLoading,setIsLoading}=useContext(CaptainDataContext);
  const token=localStorage.getItem('token');
  const navigate=useNavigate();
  if(isLoading){
    <div>
      <h1>Loading...</h1> 
    </div>
  }
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
    axios.get('http://localhost:4000/captains/profile',{
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }).then((response)=>{
      setCaptain(response.data.captain)
      setIsLoading(false)
    }).catch((error)=>{
      console.log(error)
      localStorage.removeItem('token')
      navigate('/captain-login')
    })  
  },[token] )
  
  return (
    <>
     {children} 
    </>
  )
}

export default CaptainProtectedWrapper
