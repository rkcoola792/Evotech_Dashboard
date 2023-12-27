import React from 'react'

const Gifts = ({img ,name}) => {
  return (
    <div className='flex flex-col  gap-6 w-28 h-28 bg-white m-2 rounded-xl'>
      <img src={img} className='w-10 mt-4 ml-4'></img>
      <p className='text-sm ml-4 font-medium opacity-80'>{name}</p>
    </div>
  )
}

export default Gifts
