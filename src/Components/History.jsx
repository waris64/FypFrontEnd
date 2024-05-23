import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import rectangle from "../assets/Rectangle 10.png";

import Nav from './Nav';
import Sidebar from './Sidebar';


const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        let user = JSON.parse(localStorage.getItem('user'))
        const userId = user.data.user._id

        const response = await axios.get(`https://fyp-back-end-tan.vercel.app/api/records/getuserdata/${userId}`, {
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.status === 200) {
          setHistory(response.data.data);
        }

      } catch (error) {
        console.log(error);
        toast.error(error.response.data.data);
      }
    };

    getDetails();
  }, []);

  return (
    <div  >

      <Nav logoSrc={rectangle} />
      <Sidebar />
      <h1 className='text-center font-semibold text-4xl py-6 px-4'>History </h1>
      <div className='flex  lg:gap-3 lg:flex-wrap md:flex-col  gap-y-2  lg:px-2 px-8 md:px-6  flex-col lg:flex-row '>
        {history.map((item, index) => (
          <div key={index} className="flex flex-wrap flex-col text-center py-10  gap-y-4 text-gray-100 rounded md:px-4   lg:text-xl border  shadow-3xl  lg:font-semibold  bg-gradient-to-t from-orange-400 to-orange-500">
            {/* <p>User ID: {item.index}</p> */}
            <p>Disease Prediction: {item.diseasePrediction}</p>
            <p>Disease Confidence:{item.diseaseConfidence}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
