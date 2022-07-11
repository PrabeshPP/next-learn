import React from 'react'

const MeetupDetails = (props) => {
  return (
    <div className='h-[90vh] w-[40%] bg-white shadow-md shadow-[#0000008f] mt-10 p-0 flex mb-10 flex-col'>
      <h1 className='font-bold text-2xl text-center'>{props.title}</h1>
      <img src={props.imgSrc} className="h-[40%] w-[100%] object-cover mt-10" alt={props.title} />
      <p className='text-md font-bold text-center mt-5'>{props.address}</p>
      <p className='text-sm font-bold text-center mt-10'>{props.description}</p>

  </div>
  )
}



export default MeetupDetails;