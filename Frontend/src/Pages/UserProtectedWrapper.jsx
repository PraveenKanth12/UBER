import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {
  const {user,setUser}=useContext(UserDataContext)
  const token=localStorage.getItem('token');
  const [isLoading,setIsLoading]=useState(true);
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
    axios.get('http://localhost:4000/users/profile',{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(response=>{
        if(response.status===200){
          const data=response.data
          setUser(data.user)
          setIsLoading(false)
        }
      }).catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')
      })

  },[token])


  return (
    <>
     {children} 
    </>
  )
}

export default UserProtectedWrapper
