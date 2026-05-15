import SideBar from '@/components/shared/SideBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-4'>
        <SideBar></SideBar>
      <div className='ml-[200px]'>{children}</div>
    </div>
  )
}

export default layout
