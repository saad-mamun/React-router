import React from 'react'
import { useNavigate } from 'react-router-dom'
function Error() {
let Navigate = useNavigate()
    const handleClick =() =>{
        Navigate("/")
    }


  return (
    <div className=''>
      <h1  className="pt-[200px] text-center"> This page is not Found, please go back</h1>

      <div className='w-full'>
      <button className='btn bg-indigo-500 px-2 py-1 rounded-md text-white mx-auto block' onClick={handleClick} >Back home</button>
      </div>

    </div>
  )
}

export default Error
