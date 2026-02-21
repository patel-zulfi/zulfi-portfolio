import React from 'react'

function About() {
  return (
    <div 
    name="About"
    className='max-w-screen-2xl container  mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-3xl font-bold mb-5'>About</h1> 
       <p>
          Hello, I'm Zulfikar, a passionate Web developer with a keen eye for MERN
          Stack . With a background in CSE, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p> 
        <br></br> 
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1> 
        <span>
          [BE], [Institute : Shree Sad Vidya mandal Institute Of Technology], 
          [University: Gujarat Technological University], [completion of Year : 2027] , [Computer Science and Engineering],
        </span> 

        <br />
        <br /> 

        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in [Programming Languages]  Strong grasp of [Design Principles/Concepts]
          Excellent problem-solving skills and Leadership Quality Effective communicator and
          collaborator and 
        </span>
        <br />
        <br /> 

         <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative <span className='font-semibold'>Computer Science and Engineering</span> solutions solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>

    </div>
  )
}

export default About