import React from 'react'
import { useEffect } from 'react'

function Home() {
    useEffect(()=>{
        alert("Login Successful")
    },[])
  return (
    <>
    <h1>This is home page</h1>
    </>
  )
}

export default Home