import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Rectangle 10.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import "../App.css";
import axios from "axios";
import History from "./History";

const Nav = ({ logoSrc }) => {
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
    setIsOpen(false); // Close menu after logout
  };

  return (
    <div className="md:flex md:flex-row  md:justify-start md:items-center lg:items-center  md:text-white    bg-green-950 md:py-5  relative">
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ repeat: 2, duration: 2, repeatDelay: 1 }}
        src={logoSrc}
        className="w-12 h-12 absolute top-2 left-2 hidden md:inline"
        alt=""
      />
      <div
        className={`${isOpen ? "block" : "hidden"
          } md:flex md:mx-[60%]  lg:mx-[50%] md:items-center  right-[3vw] bg-green-950 w-full`}
      >
        <motion.ul
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col  md:flex-row  justify-around items-center md:gap-x-7 md:-ml-28 lg:ml-44 lg:gap-x-10 "
        >
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0 "
          >
            <Link to="/" onClick={toggleMenu}>
              <label>Home</label>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/diseases" onClick={toggleMenu}>
              Diseases
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 1 }}
            className="mb-2 md:mb-0"
          >
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 0.8 }}
            style={{ y: 1 }}
            className="mb-2 md:mb-0"
          >
            {isLoggedIn ? (
              <motion.li
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.8 }}

              style={{ x: 1 }}
                className="mb-2 md:mb-0">
                <span onClick={toggleMenu} className="cursor-pointer  ">
                  <span className="lg:text-lg">{username}</span>
                </span>
                <ul
                  className={`${isOpen ? "block" : "hidden"
                    } absolute  mt-2 rounded-md border shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                >
                  <li className="block px-4 py-2  text-sm  lg:text-lg  text-gray-700 hover:bg-gray-100 lg:gap-y-7 font-semibold">
                    <Link to="/" onClick={handleLogout} className="">
                      Logout
                    </Link>
                    <br />
                    <Link to="/history"  className="">
                      History
                    </Link>
                  </li>
                </ul>

              </motion.li>
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
          </motion.li>
        </motion.ul>
      </div>

    </div>
  );
};

export default Nav;
