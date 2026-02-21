import React from 'react'
import html from "../../public/html.png" 
import css from "../../public/css.png"
import javascript from "../../public/js.png" 
import react from "../../public/react.png"  
import tailwind from "../../public/tailwing.png" 
import Bootstrap from "../../public/boot.png"  

import Node from "../../public/Node.png"
import Express from "../../public/EXpress.png"
import MongoDB from "../../public/mongogdb.png"

function Skills(){ 

   const cardItem = [
   {
      id: 1,
      logo: html,
      name: "HTML",
    }, 
     {
      id: 2,
      logo: css,
      name: "CSS",
    }, 
     {
      id: 3,
      logo: javascript,
      name: "javascript",
    }, 
     {
      id: 4,
      logo: react,
      name: "REACT",
    }, 
     {
      id: 5,
      logo: tailwind,
      name: "TAILWIND CSS",
    }, 
     {
      id: 6,
      logo: Bootstrap,
      name: "BOOTSTRAP",
    }, 
    
    {

   
       id: 7,
      logo: Node,
      name: "NODEJS",
    },  

    {
       id: 8,
      logo: Express,
      name: "EXPRESS",
    }, 
    {
       id: 9,
      logo: MongoDB,
      name: "MONGODB",
    }, 
     
   
   ]
  return (
   
       <div 
       name="Skills"
       className='max-w-screen-2xl container  mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-3xl font-bold mb-5'>Skills</h1>  

        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3"> 
         {
           cardItem.map(({ id, logo, name }) => ( 
           <div
              className=" flex flex-col items-center justify-center border-2px rounded-full md:w-200px md:h-200px shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}> 
              
              <img src={logo} className="w-20px h-20" alt="" /> 
               <div> 
               <div className='font-bold px-2 text-large mb-2 mt-3 '>{name}</div> </div>   
            </div> 
             
           ))} 
           
        </div>
        </div>
      
  )
}

export default Skills