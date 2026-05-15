import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[150px] bg-blue-800 text-black flex items-center justify-center font-bold '>
      <ul className='flex gap-5'>
        <Link href={"/"}>Home</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"about"}>About Us</Link>
        <Link href={"/reviews"}>Reviews</Link>
      </ul>
    </div>
  )
}

export default Navbar
