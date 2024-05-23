import React, { useEffect, useState } from "react";
import banner from "../assets/home-banner.png";
import rectangle from "../assets/Rectangle 11.png";
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { BsCartX, BsCloudUploadFill } from "react-icons/bs";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import BarChart from '../Components/BarChart.jsx';
import { ping } from 'ldrs'

const Main = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diseaseData, setDiseaseData] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleAnalyze = async () => {
    if (!image) {
      toast.error('Select the image first');
      return;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', image);

      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { confidence, prediction } = response.data;

      setDiseaseData({ confidence, prediction });

      setLoading(false);
      toast.success('Data fetched successfully.');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || 'An error occurred.');
    }
    ping.register()
  };


  return (
    <div className="printable-content">
      <motion.div className="md:flex md:text-center md:bg-cover overflow-hidden md:bg-no-repeat md:text-3xl md:text-white h-[9rem] md:h-[15rem] bg-cover bg-no-repeat text-2xl text-white py-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('${banner}')`,
        }}>
        <motion.h1 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="text-center  lg:text-4xl  md:m-auto md:leading-10 -z-1">
          Citrus Disease <label htmlFor="">Detection</label>
          <br />
          <label className="text-orange-500">Services</label>
        </motion.h1>
      </motion.div>

      <section className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8 overflow-hidden p-7 z-auto">
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <img src={rectangle} className="w-82 p-6 md:w-80" alt="Rectangle" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 1 }} transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pl-8 flex-wrap ">
          <h1 className="font-bold text-2xl md:text-4xl text-center pb-5 md:pb-10  ">
            Citrus <label className="text-orange-500 md:text-orange-500"> Diseases</label>
          </h1>
          <p className="overflow-hidden text-md md:text-lg md:text-left leading-loose text-justify p-3">
            Leaves from healthy plants and plants infected with prevalent
            diseases (citrus greening, citrus canker, scab, greasy spot). Citrus
            greening is the most serious citrus disease caused by a bacteria
            which is spread by the Asian citrus psyllid (ACP). ACP is a tiny
            insect that transmits the bacteria to the tree when feeding.
          </p>
        </motion.div>
      </section>

      <div className="upload-section  md:m-auto rounded md:shadow-orange-800 md:mb-5 shadow-2xl overflow-hidden m-5 shadow-200 h-96 pt-8 flex flex-col items-center justify-center md:w-[87vw]">
        <div className="border-2 border-slate-300 rounded-lg overflow-hidden md:w-60 w-56 h-60 shadow-2xl flex flex-col items-center justify-center bg-gray-200">
          <label htmlFor="fileInput" className="file-label">
            <BsCloudUploadFill className="size-16 m-auto hover:cursor-pointer hover:text-orange-500 transition-all duration-200 " />
            Drop your picture here
          </label>
          <input type="file" id="fileInput" name="input" className="hidden" accept="image/*" onChange={handleFileChange} />
          {image && (
            <p> {image.name}</p>
          )}
        </div>
        <button onClick={handleAnalyze} className="m-auto flex">
          <h1 className="md:w-32 md:p-2 p-1 gap-y-4 rounded-xl bg-orange-500 md:text-xl  text-white text-xl cursor-pointer">
            Analyze
          </h1>
        </button>
      </div>

      {/* Rendering  the BarChart component here */}
      <span>{loading &&
        <>
          <l-ping
            size="45"
            speed="2"
            color="orange"
          ></l-ping></>}</span>
      {diseaseData && <BarChart diseaseData={diseaseData} />}


    </div>
  );
};

export default Main;
