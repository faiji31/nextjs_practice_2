import Link from 'next/link'
import React from 'react'

import Container from './Container'

const Navbar = () => {
  return (


    <div className='h-[150px] bg-blue-800 text-black flex items-center justify-between font-bold p-6 '>
      <ul className='flex gap-5'>
        <Link href={"/"}>Home</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"about"}>About Us</Link>
        <Link href={"/reviews"}>Reviews</Link>
      </ul>

      <Link href={"/login"}>
      <button>  Login</button>
   
      </Link>
    </div>

    
  )
}

export default Navbar
