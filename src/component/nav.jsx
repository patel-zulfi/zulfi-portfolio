import React, { use, useState } from 'react' 
import pic from "../../public/avif.png" 
import pics from "../../public/Zulfi.png"
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io"; 
import {Link} from "react-scroll"

function NavBar() { 
   const [menu , setmenu] = useState(false) 
   const Navitems = [
      {
         id:1, 
         Text:"Home"
      }, 
      {
         id:2, 
         Text:"About"
      },
      {
         id:3, 
         Text:"Projects"
      }, 
      {
         id:4, 
         Text:"Skills"
      }, 
       {
         id:5, 
         Text:"Contact"
      },
   ]
   return(
      <div className='max-w-screen-2xl container  mx-auto px-5 md:px-20 h-16 shadow-md fixed left-0 right-0 z-50 bg-white'> 
      <div className='flex justify-between items-center  h-16'>
        <div className='flex w-xs 2'>
         <img src={pics} className='h-10 w-10 rounded-full' alt="" /> 
         <h1 className='font-semibold text-large cursor-default ml-1.5 '>Patel Zulfika<span className='text-green-500'>R</span> 
            <p className='text-sm'>MERN Stack <span className='text-red-500'>Developer</span></p>
         </h1>
        </div>
        <div className='text-sm'> 
         {/* Desktop Nav bar */}
         <ul className='hidden md:flex space-x-10'>
           {
            Navitems.map(({id , Text}) => (
               <li className='hover:scale-130 duration-500 cursor-pointer' key={id}
               >
                 <Link to={Text}
                 smooth={true}
                 duration={500}
                 offset={-70}
                 activeClass='active'> 
                 {Text}
                 </Link>   
               
               
               </li>
            ))
           }
         </ul>  
         <div onClick={() => setmenu(!menu)} className='md:hidden'>
           {menu ?<IoIosClose size={30} />  : <IoMenu size={30}/>  }
       
         </div>
         
        </div>
      </div> 
      
      {/* mobile Nav bar */} 
      {
         menu && (
             <div className='bg-white'>
       <ul className='md:hidden flex flex-col h-screen justify-center items-center space-y-4 text-xl font-semibold'> 
         {
            Navitems.map(({id , Text}) => (
               <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link 
                  onClick={() => setmenu(!menu)}
                  to={Text}
                 smooth={true}
                 duration={500}
                 offset={-70}
                 activeClass='active'> 
                 {Text}
                 </Link>  
            </li>
            ))
         }
         </ul> 
          
     </div>
         )
      }
  
      </div>
   )
} 

export default NavBar;