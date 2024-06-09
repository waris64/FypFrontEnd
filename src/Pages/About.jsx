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
    <div className="p-7 md:p-0 about overflow-hidden 2xl:bg-red-50 2xl:py-7 2xl:leading-loose ">
      <Nav/>
      <Sidebar className="bg-red-400" />
      <motion.div
        className="flex flex-col text-center items-center justify-center m-auto md:w-[50vw] overflow-x-hidden md:overflow-x-hidden"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0, duration: 2 }}
        transition={{ duration: 1 }}
      >
        <h1 className="md:text-3xl text-xl font-bold border-b-4 border-orange-500 lg:pt-8 2xl:pt-24 2xl:text-8xl">About Us</h1>
        <p className="text-justify md:pt-8  pt-5 md:text-xl lg:pb-4 2xl:pt-20 2xl:text-2xl 2xl:leading-loose 2xl:font-semibold">
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
        className=" flex flex-col justify-center pb-2 gap-y-4 pt-4 my-4 gap-x-4   text-sm   md:w-3/5  md:m-auto md:mt-4 md:mb-4 lg:gap-y-8 lg:h-[50vh] lg:pb-8 lg:mb-8 2xl:mb-[40vh] 2xl:h-[20vh] rounded   bg-gray-300 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 2 }}
        transition={{ type: "tween" }}
      >
        <h1 className="m-auto text-2xl border-b-4 border-orange-500  md:m-auto md:text-3xl  2xl:font-semibold 2xl:text-5xl">Team Members</h1>
        <div className="flex gap justify-around py-4  px-4 lg:text-center lg:items-center lg:pb-4  2xl:pb-4 2xl:py-10 ">
          <article className="flex items-center justify-center flex-col  text-center   ">
            <motion.img
              src={Mubeen} loading={lazy}
              alt="Muhammad Mubeen "
              className="size-14 md:size-16 lg:size-20  2xl:size-44  rounded-full"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ duration: 1.2 }}
              transition={{ type: "tween", duration: 1, delay: 0 }}
            />
            <p className=" md:text-lg lg:pt-1 lg:text-lg ">Muhammad Mubeen </p>
            <code className="border-b-2 border-orange-500">UI-Designer</code>
          </article>
          <article className="flex items-center justify-center flex-col text-center  ">
            <motion.img
              src={Waris} loading={lazy}
              alt="Waris"
              className="size-14 md:size-16  lg:size-20 2xl:size-44 rounded-full"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ duration: 1.2 }}
              transition={{ type: "tween", duration: 1, delay: 0.3 }}
            />
            <p className="md:text-lg  lg:text-lg">Muhammad Waris Saleh</p>
            <code className="border-b-2 border-orange-500">MERN Developer</code>
          </article>
          <article className="flex items-center justify-center flex-col text-center ">
            <motion.img
              src={Ali} loading={lazy}
              alt="Ali"
              className="size-14 md:size-16 lg:size-20 2xl:size-44  rounded-full"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ duration: 1.2 }}
              transition={{ type: "tween", duration: 1, delay: 0.5 }}
            />
            <p className="md:text-lg lg:pt-1 lg:text-lg xl:text-xl 2xl:text-2xl">Muhammad ALi Rizwan</p>
            <code className="border-b-2 border-orange-500">ML Engineer</code>
          </article>

        </div>
      </motion.div>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default About;
