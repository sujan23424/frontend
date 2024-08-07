import React from 'react'
import plugins from './plugins.json';
import Cart from './Cart.jsx'

const Plugins = () => {
  return (
    <div className='my-20'>
    <h1 className='lg:px-36 px-14 my-10 text-4xl font-semibold'>Plugins</h1>
   <div className='flex lg:px-36 px-14 flex-wrap gap-8 lg:justify-between justify-center'>
   {
     plugins.map(function(item){
         return <Cart key={item.id} name={item.name} price={item.price} image={item.image}/>
     })
    }
   </div>
 </div>
  )
}

export default Plugins;