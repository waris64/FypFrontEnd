import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoMenu, IoClose } from 'react-icons/io5';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setShowDropdown(!showDropdown);
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
    <div className='fixed  top-8  left-5 text-white md:hidden '>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={toggleSidebar}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? (
          <IoClose className="size-7 -mt-9 rounded bg-orange-500 -ml-4" />
        ) : (
          <IoMenu className="size-7 -mt-9 rounded bg-orange-500 -ml-4" />
        )}
      </motion.button>

      <motion.div
        initial={isOpen ? { opacity: 1, y: '-7%' } : { opacity: 0, y: '-10%' }}
        animate={isOpen ? { opacity: 1, y: '-7%' } : { opacity: 0, y: '-10%' }}
        transition={{ duration: 0.5 }}
        className="sidebar w-40 rounded bg-orange-500 mt-1 pt-4 pb-4 -ml-4"
      >
        {isOpen && (
          <ul className="flex flex-col m-auto pl-3 z-auto">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{ x: 1 }}
              transition={{}}
              className="mb-2 md:mb-0"
            >
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ y: 1 }}
              className="mb-2 md:mb-0"
            >
              <Link to="/diseases" onClick={toggleSidebar}>
                Diseases
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              style={{ y: 1 }}
              className="mb-2 md:mb-0"
            >
              <Link to="/about" onClick={toggleSidebar}>
                About
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 0.8 }}
              style={{ y: 1 }}
              className="mb-2 md:mb-0"
            >
              {isLoggedIn ? (
                <div className="relative">
                  <span onClick={toggleMenu} className="cursor-pointer">
                    <span className="lg:text-lg">{username}</span>
                  </span>
                  {showDropdown && (
                    <ul className="flex flex-col items-center">
                      <li className="block px-4 py-2 text-sm  hover:bg-gray-100  text-white  ">
                        <Link to="/" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                      
                      <li className="block px-4 py-2 text-sm text-white hover:bg-gray-100 ">
                        <Link to="/history" onClick={toggleMenu}>
                          History
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="mb-2 md:mb-0"
                >
                  <Link to="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                </motion.li>
              )}
            </motion.li>
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Sidebar;
