import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import rectangle from "../assets/Rectangle 10.png";
import Nav from './Nav';
import Sidebar from './Sidebar';
import moment from 'moment'
import { spiral } from 'ldrs';
spiral.register();

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getDetails = async () => {
      try {
        let user = JSON.parse(localStorage.getItem('user'))
        const userId = user.data.user._id

        const response = await axios.get(`https://fyp-back-end-tan.vercel.app/api/records/getuserdata/${userId}`, {
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
          setHistory(response.data.data.reverse());
        }
      } catch (error) {
        setLoading(false);
        toast.error("Error occured ", error.response.data.data);

      }
    };

    getDetails();
  }, []);

  return (
    <div  >

      <Nav logoSrc={rectangle} />
      <Sidebar />
      <h1 className='text-center font-semibold text-xl lg:text-4xl lg:py-4 py-4 '>History </h1>
      <div className='flex   lg:flex-wrap  lg:py-4 lg:px-6  flex-col lg:flex-col   '>
        {!loading ?<div className='text-center lg:py-44 py-44'>
          <l-spiral
            size="55"
            speed=".5"
            color="#f97316"
          ></l-spiral></div>:
          <>
            {history.map((item, index) => (
              <div key={index} className="flex text-sm px-1 md:px-4 py-0.5 lg:py-0.5 items-center  justify-between    text-gray-100 rounded lg:px-4   lg:text-lg border  shadow-3xl  lg:font-semibold  bg-gradient-to-t from-orange-400 to-orange-500">
                <p >Disease Prediction: {item.diseasePrediction}</p>
                <p className='pr-3 lg:pr-0'>Disease Confidence:{item.diseaseConfidence} </p>
                <p>Date: {moment(item.createdAt).format('MMM DD, YYYY, h:mm A')}</p>

              </div>
            ))}
          </>
        }
      </div>
    </div>
  );
};

export default History;
