import React, { lazy } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Rectangle from "../assets/Rectangle 10.png";
import Ali from "../assets/ali.png";
import Mubeen from "../assets/mubeen.jpg";
import Waris from "../assets/waris.jpg";
import Sidebar from "../Components/Sidebar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="p-7 md:p-0 about overflow-hidden  2xl:py-10 2xl:leading-loose ">
      <Nav/>
      <Sidebar className="bg-red-400" />
      <motion.div
        className="flex flex-col text-center items-center justify-center m-auto  overflow-x-hidden md:overflow-x-hidden"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0, duration: 2 }}
        transition={{ duration: 1 }}
      >
        <h1 className="md:text-3xl md:pt-10 text-xl font-bold border-b-4 border-orange-500 lg:pt-8 2xl:pt-24 2xl:text-8xl">About Us</h1>
        <p className="text-justify py-5 md:pt-8  md:px-4 md:text-center lg:pb-4 lg:text-2xl lg:px-7 2xl:pt-20 2xl:text-4xl 2xl:leading-loose 2xl:font-semibold">
          We are passionate about empowering citrus growers with the power of
          artificial intelligence. Our team of agricultural experts and AI
          enthusiasts have come together to develop a user-friendly web
          application that aids in the early detection of citrus diseases. We
          believe early intervention is key to minimizing crop loss and ensuring
          the health of your citrus groves. Our mission is to provide accessible
          and reliable AI technology to support sustainable citrus farming
          practices, fostering a future of bountiful harvests and a thriving
          citrus industry
        </p>
      </motion.div>
      <motion.div
        className=" flex flex-col justify-center pb-2 gap-y-4 pt-4  gap-x-4   text-sm md:w-full   md:m-auto md:mt-4 md:mb-4 lg:gap-y-8 lg:pb-8 lg:mb-8 rounded   bg-gray-300 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 2 }}
        transition={{ type: "tween" }}
      >
        <div className="flex  flex-col  justify-around py-4  px-4 md:px-7   lg:text-center lg:items-center lg:pb-4 lg:text-2xl  2xl:gap-y-28 ">
        <h1 className="m-auto text-xl border-b-4 border-orange-500  gap-y-4  md:m-auto md:text-3xl  2xl:font-semibold 2xl:text-8xl ">Team Members</h1>
         <div className="flex flex-col py-4  pt-4  divide-x-2 gap-y-7 md:flex-row md:justify-between  md:px-4 lg:justify-between lg:w-full lg:px-16  2xl:w-full 2xl:gap-x-10  ">
          <article className="flex items-center justify-center flex-col  text-center border md:border-none py-3">
            <motion.img
              src={Mubeen} loading={lazy}
              alt="Muhammad Mubeen "
              className="size-14 md:size-16 lg:size-24  2xl:size-60  rounded-full"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ duration: 1.2 }}
              transition={{ type: "tween", duration: 1, delay: 0 }}
            />
            <p className=" md:text-lg  lg:text-lg 2xl:text-5xl ">Muhammad Mubeen </p>
            <code className="border-b-2 border-orange-500 2xl:text-4xl">UI-Designer</code>
          </article>
          <article className="flex items-center justify-center flex-col  text-center border md:border-none py-3">
            <motion.img
              src={Waris} loading={lazy}
              alt="Waris"
              className="size-14 rounded-full md:size-16  lg:size-24    2xl:size-60"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ duration: 1.2 }}
              transition={{ type: "tween", duration: 1, delay: 0.3 }}
            />
            <p className="md:text-lg  lg:text-lg 2xl:text-5xl">Muhammad Waris Saleh</p>
            <code className="border-b-2 border-orange-500 2xl:text-4xl">MERN Developer</code>
          </article>
          <article className="flex items-center justify-center flex-col  text-center border md:border-none py-3  ">
            <motion.img
              src={Ali} loading={lazy}
              alt="Ali"
              className="size-14 md:size-16 lg:size-24 2xl:size-60  rounded-full"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ duration: 1.2 }}
              transition={{ type: "tween", duration: 1, delay: 0.5 }}
            />
            <p className="md:text-lg lg:pt-1 lg:text-lg xl:text-xl  2xl:text-5xl ">Muhammad ALi Rizwan</p>
            <code className="border-b-2 border-orange-500 2xl:text-4xl 2xl:pt-5">ML Engineer</code>
          </article>
          </div>
        </div>
      </motion.div>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default About;
