import React from 'react';
import {motion} from 'framer-motion';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import { lazy } from 'react';

const Footer = () => {
  return (
    <div className=' footer pt-4 bg-green-950 text-white flex flex-col text-sm md:flex-row justify-around p-5 leading-10 overflow-hidden xl:text-lg xl:py-5'>
      <motion.div className='mb-4 md:mb-0'
      initial={{opacity:0, x:-100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1}}
      >
        <h1 className='text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Quick <span className='text-orange-500'>Links </span></h1>
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
        <label className='border-b-2 border-orange-500'>
          copyright@ 2024 reserved
        </label>
      </motion.div>
      <motion.div className='flex flex-col'
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:1}}
      transition={{duration:1}}
      >
        <h1 className='md:text-2xl text-lg lg:text-2xl xl:text-2xl xl:pb-4'>Contact &nbsp; <span className="text-orange-500">Us</span> </h1>
        <label htmlFor="contact">
          <label className=" border-b-2 border-orange-500">Phone no :</label> +923186157770
        </label>  
        <label htmlFor="Email">
 <label className="border-b-2 border-orange-500">Email:</label> Citrus@gmail.com
        </label>
        <div className='flex justify-between w-1/2 md:w-3/5 lg:w-full lg:justify-around xl:pt-4'>
          <img src={facebook}  loading={lazy} alt=""   className='size-5 lg:size-7'/>
          <img src={instagram} loading={lazy} alt=""  className='size-5 lg:size-8'/>
          <img src={linkedin} loading={lazy} alt=""  className='size-5 lg:size-8'/>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
