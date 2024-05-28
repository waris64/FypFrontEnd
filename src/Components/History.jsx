import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import toast from 'react-hot-toast';
import rectangle from "../assets/Rectangle 10.png";
import Nav from './Nav';
import Sidebar from './Sidebar';
import moment from 'moment';
import { spiral } from 'ldrs';
import '../App.css';
spiral.register();

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      try {
        let user = JSON.parse(localStorage.getItem('user'))
        const userId = user.data.user._id

        const response = await axios.get(`https://fyp-back-end-tan.vercel.app/api/records/getuserdata/${userId}`, {
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
          setHistory(response.data.data.reverse());
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Error occurred ", error.response.data.data);
      }
    };

    getDetails();
  }, []);

  return (
    <div>
      <Nav logoSrc={rectangle} />
      <Sidebar />
      <h1 className='text-center font-semibold text-xl py-4 lg:text-4xl lg:py-4'>History </h1>
      <div className='flex flex-col lg:flex-wrap  lg:py-4 lg:px-6   lg:flex-col'>
        {loading ?
          <div className='text-center lg:py-44 py-44'>
            <l-spiral
              size="55"
              speed=".5"
              color="#f97316"
            ></l-spiral>
          </div>
          :
          <table className="w-full text-center m-auto items-center">
            <thead className="bg-orange-400 text-white">
              <tr>
                <th className="p-4">Disease Prediction</th>
                <th className="p-4">Disease Confidence</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={index} className="bg-gray-100 text-center px-2 border-2">
                  <td className="p-4 ">{item.diseasePrediction}</td>
                  <td className="p-4 ">{item.diseaseConfidence}</td>
                  <td className="p-4 ">{moment(item.createdAt).format('MMM DD, YYYY, h:mm A')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
      <Footer />
    </div>
  );
};

export default History;
