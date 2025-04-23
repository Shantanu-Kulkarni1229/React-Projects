import React from 'react'
import { useState, useEffect } from'react'
export const Github = () => {
  const [data , setdata] = useState([])
  useEffect(() =>{
    fetch('https://api.github.com/users/Shantanu-Kulkarni1229')
    .then(response => response.json())
    .then(data => {
    console.log(data)
    setdata(data)

    })
  } , [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img  src={data.avatar_url} alt="Avatar" width={300}/>
    
    </div>
  )
}
