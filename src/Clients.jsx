import React from 'react'

const Clients = () => {
  return (
    <div className="client-container">
      <div className='clients'>
      <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">Our Clients</h1>
      <hr />
      </div>
      
      <div className="client-section mt-9">
        <div className="client-logo"><img src="./logo1.png" alt="Client 1 Logo" /></div>
        <div className="client-logo"><img src="./logo2.png" alt="Client 1 Logo" /></div>
        <div className="client-logo"><img src="./logo1.png" alt="Client 1 Logo" /></div>
        <div className="client-logo"><img src="./logo2.png" alt="Client 1 Logo" /></div>
        <div className="client-logo"><img src="./logo1.png" alt="Client 1 Logo" /></div>
        <div className="client-logo"><img src="./logo2.png" alt="Client 1 Logo" /></div>

      </div>
    </div>
  )
}

export default Clients