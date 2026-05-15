import React from 'react'


const getAllServices = async()=>{
  const res = await fetch("https://raw.githubusercontent.com/ferdouszihad/Hero-Kidz-assets/refs/heads/main/toys.json")
  const data = await res.json()
  return data
}

const SevicePage = async() => {
  const services = await getAllServices()
  console.log(services)
  return (
    <div>
      <h2>Service Page</h2>
    </div>
  )
}

export default SevicePage
