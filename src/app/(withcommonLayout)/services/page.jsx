import React from 'react'
import ServiceCard from "../../../components/ServiceCard"

const getAllServices = async()=>{
  const res = await fetch("https://raw.githubusercontent.com/ferdouszihad/Hero-Kidz-assets/refs/heads/main/toys.json")

  await new Promise((resolve)=>setTimeout(resolve, 3000))
  const data = await res.json()
  return data
}

const ServicePage = async() => {
  const services = await getAllServices()
  console.log(services)
  return (
    <div >
      <h2>Service Page</h2>

      <div className='grid grid-cols-4 gap-5'>
     

      {
        services.map((service, index) => (
          <div key={service.title}>
            <ServiceCard service={service} index={index} />
          </div>
        ))
      }
       </div>
    </div>
  )
}

export default ServicePage
