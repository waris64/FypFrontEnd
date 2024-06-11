import React, { lazy,useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Rectangle 10.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import "../App.css";
import axios from "axios";
import History from "./History";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setIsLoggedIn(true);
      setUsername(userData.data.user.username);
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
    setIsOpen(false); 
  };

  return (
    <div className="flex justify-center 2xl:items-center bg-green-950 relative md:py-4 md:flex-row md:justify-between md:text-white lg:items-center lg:justify-between lg:py-4 xl:justify-between xl:py-2  2xl:py-8 ">
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ repeat: 2, duration: 2, repeatDelay: 1 }}
        src={logo}
        loading={lazy}
        className="w-12 h-12 md:size-8 absolute top-2 left-2 hidden md:inline md:left-4 lg:top-4 lg:h-16 lg:w-16 xl:size-12 2xl:top-10 2xl:ml-16 "
        alt="Logo"
      />
      <div
        className={`${isOpen ? "block" : "hidden"} relative md:flex md:left-64 lg:left-[50vw] 2xl:left-[75vw]`}
      >
        <motion.ul
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col  md:flex-row justify-around items-center md:gap-x-7 md:-ml-36 lg:ml-10 lg:py-3 lg:text-xl lg:gap-x-10   2xl:-ml-36 2xl:text-4xl"
        >
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0 "
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/diseases">Diseases</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/about">About</Link>
          </motion.li>
          <div>
            {isLoggedIn ? (
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="mb-2 md:mb-0"
                style={{ x: 1 }}
              >
                <span onClick={toggleMenu} className="cursor-pointer">
                  <span className="lg:text-3xl  lg:pr-4  xl:text-lg  2xl:text-5xl  ">{username}</span>
                </span>
                <ul
                  className={`${
                    isOpen ? "block" : "hidden"
                  } absolute mt-2 rounded-md border shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <li className="block px-4 py-2 text-sm lg:text-lg text-gray-700 hover:bg-gray-100 lg:gap-y-7 font-semibold xl:text-xl  xl:py-4 xl:pb-4">
                    <Link to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                    <br />
                    <Link to="/history">History</Link>
                  </li>
                </ul>
              </motion.div>
            ) : (
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ y: 1 }}
                className="mb-2 md:mb-0"
              >
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </motion.li>
            )}
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Nav;
