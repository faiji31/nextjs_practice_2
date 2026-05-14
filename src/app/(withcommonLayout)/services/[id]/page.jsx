import React from 'react'

const ServiceDetailsPage = async ({ params }) => {
    const {id} = await params
    console.log(id)
    
    return (
    <div>
      <h2>Service Details Page{id}</h2>
    </div>
  )
}

export default ServiceDetailsPage
