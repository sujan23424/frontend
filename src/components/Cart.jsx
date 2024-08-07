import React from 'react'
const Cart = (props) => {
  return (
      <div className=''>
        <img src={props.image} className='w-full' alt="" />
        <p className='text-center hover:text-indigo-600 cursor-pointer'>{props.name}</p>
        <p className='text-center'>${props.price}</p>
      </div>
  )
}

export default Cart