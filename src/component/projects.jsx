import React from 'react'
import ecom from "../../public/ecom.png"  
import chat from "../../public/chat.png" 
import Ai from "../../public/AI.png" 

function Projects(){  
   const cardItem = [
    {
      id: 1,
      logo: ecom,
      name: "E-Commerce Platfrom",
    },
    {
      id: 2,
      logo: chat,
      name: "Real Time Chat Application",
    }, 

    {
       id: 3,
      logo: Ai,
      name: " AI Website Builder ",
    }
   
  ];
  return (
    <div 
    name="Projects"
    className='max-w-screen-2xl container  mx-auto px-4 md:px-20 mt-10'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>projects</h1> 
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
       {
         cardItem.map(({id,logo,name}) => (
            <div className='md:w-100 h-100 border-2px rounded-lg shadow-lg p-2 cursor-pointer hover:scale-90 duration-100' key={id}> 
            <img src={logo} className='w-70 h-70 p-1 rounded-xl border-2px' alt="" /> 
            <div> 
               <div className='font-bold px-2 text-large mb-2'>{name}</div> 
               <p className='px-2 text-gray-700'>Using MERN Technology</p>
            </div> 
            <div className='px-1 py-2 space-x-4 justify-around'> 
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Github</button>
 
               <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>View</button>
            </div>
            </div>
         ))
       }
      </div>
      </div>
    </div>
  )
}

export default Projects