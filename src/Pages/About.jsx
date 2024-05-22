import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Rectangle from "../assets/Rectangle 10.png";
import Profile from "../assets/profile.jpeg";
import Sidebar from "../Components/Sidebar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="p-7 md:p-0 about overflow-hidden">
      <Nav logoSrc={Rectangle} />
      <Sidebar className="bg-red-400" />
      <motion.div
        className="flex flex-col text-center items-center justify-center m-auto md:w-[50vw] overflow-x-hidden md:overflow-x-hidden"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0, duration: 2 }}
        transition={{ duration: 1 }}
      >
        <h1 className="md:text-3xl tablet:pt-6 text-xl font-bold border-b-4 border-orange-500">About Us</h1>
        <p className="text-justify md:pt-8  pt-5 md:text-xl ">
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
        className="md:mb-5 mb-5 mt-5  bg-gray-300 md:h-44 h-36 pb-2 flex flex-col justify-center md:w-[50vw] md:mt-16 md:pb-4 md:m-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, duration: 2 }}
        transition={{ type: "tween" }}
      >
        <h1 className="md:m-auto m-auto md:text-4xl tablet:text-3xl text-2xl border-b-4 border-orange-500">Team Members</h1>
        <div className="flex gap-9 justify-center">
          <motion.img
            src={Profile}
            alt="Profile 1"
            className="size-14 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ duration: 1.2 }}
            transition={{ type: "tween", duration: 1, delay: 0 }}
          />
          <motion.img
            src={Profile}
            alt="Profile 1"
            className="size-14 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ duration: 1.2 }}
            transition={{ type: "tween", duration: 1, delay: 0.3 }}
          />
          <motion.img
            src={Profile}
            alt="Profile 1"
            className="size-14 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ duration: 1.2 }}
            transition={{ type: "tween", duration: 1, delay: 0.5 }} // Delay for the third image
          />
        </div>
      </motion.div>
      <Footer className="w-1"/>
      <Sidebar />
    </div>
  );
};

export default About;
