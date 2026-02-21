import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTelegram } from "react-icons/fa"; 
import { ReactTyped } from "react-typed"; 
import pic from "../../public/avif.png"

function Home() {
  return (
 <>
 <div 
 name="Home"
 className='max-w-screen-2xl container  mx-auto px-4 md:px-20 py-20'>
  <div className='flex flex-col md:flex-row'>
   <div className='md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1'>
   <span>Welcome In My Feed</span> 
  <div className='flex space-x-1 text-2xl md:text-4xl '>
     <h1>Hello, I'm a</h1> 
   {/* <span className='text-red-700 font-bold'>Developer</span>  */} 
   <ReactTyped className='text-red-700 font-bold'
          strings={["Developer" , "Programmer" , "Coder"]}
          typeSpeed={70} 
          backSpeed={60} 
          loop={true}
        />
  </div> 
  <br/>
<p className='text-sm md:text-md text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Quisquam, recusandae consequatur. Accusamus sint libero eligendi
laborum fuga repudiandae? Asperiores tempore eos animi dolores
corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p> 
<br/> 
{/* social media icon */} 
<div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
<div className='space-y-2'>
   <h1 className='font-bold'>Availabel On</h1> 
   <ul className='flex space-x-5'> 

   <li>
    <a href='https://www.instagram.com/zulfikar4751' target='_blank'>
    <GrInstagram className='text-2xl cursor-pointer' /> 
  </a>
   </li> 
   
   <li>
    <a href="https://www.linkedin.com/in/zulfikar-patel-183720264/" target='_blank'>
    <IoLogoLinkedin className='text-2xl cursor-pointer'/>
    </a>
     </li>   
    <li> 
      <a href="https://web.telegram.org/k/" target='_blank'>
      <FaTelegram className='text-2xl cursor-pointer'/>
    </a>
     </li> 
   </ul> 
   </div>
   </div>
   </div> 


   <div className='md:w-1/2 md:ml-48 md:mt-20 mt-10 order-1'>
   <img src={pic} 
   className='rounded-full md:h-[450] md: w-[450] ' alt="" />
   </div> 
   </div>
 </div> 
 <hr></hr>
 </>
  )
}

export default Home