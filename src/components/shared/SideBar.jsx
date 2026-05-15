import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='w-[200px] h-screen bg-amber-950 px-3 py-4 fixed top-0 left-0'>
        
      <h2>Car Cleanify</h2>
      <img src={"https://www.vectorstock.com/royalty-free-vector/simple-car-logo-vector-50200370"} alt="" />
      <div className='flex flex-col gap-2 mt-7'>
       <Link href={"/dashboard/profile"}>Profiles</Link>
       <Link href={"dashboard/my-bookings"}>My Bookings</Link>

      </div>
    </div>
  )
}

export default SideBar
