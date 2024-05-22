import React from 'react';
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <div className=' footer mt-4 w-84 tablet:w-screen bg-green-950 text-white flex flex-col md:flex-row justify-around p-5 leading-10 overflow-hidden'>
      <motion.div className='mb-4 md:mb-0'
      initial={{opacity:0, x:-100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1}}
      >
        <h1 className='md:text-4xl text-2xl tablet:text-2xl'>Quick <span className='text-orange-500'>Links </span></h1>
        <ul>
          <li >Home</li>
          <li>Diseases</li>
          <li>About Us</li>
        </ul>
      </motion.div>
      <motion.div className='flex items-end mb-4 md:mb-0 md:ml-8'
      initial={{opacity:0, scale:0}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1}}
      >
        <label>
          copyright@ 2024 reserved
        </label>
      </motion.div>
      <motion.div className='flex flex-col'
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:1}}
      transition={{duration:1}}
      >
        <h1 className='md:text-4xl text-2xl tablet:text-2xl'>Contact &nbsp; <span className="text-orange-500">Us</span> </h1>
        <label htmlFor="contact">
          Phone no : +923479565089
        </label>  
        <label htmlFor="Email">
          Email: Citrus@gmail.com
        </label>
      </motion.div>
    </div>
  );
}

export default Footer;
