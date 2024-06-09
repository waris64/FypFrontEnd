import React, { useState } from "react";
import banner from "../assets/home-banner.png";
import rectangle from "../assets/Rectangle 11.png";
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { BsCloudUploadFill } from "react-icons/bs";
import BarChart from '../Components/BarChart.jsx';
import { spiral } from 'ldrs';
import { lazy } from "react";
import { BASE_URL } from "../API.Config.js";
import { PYTHON_MODEL_BASE_URL } from "../API.Config.js";

spiral.register();

const Main = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diseaseData, setDiseaseData] = useState(null);
  const fileSizeLimit = 2 * 1024 * 1024;

  // Handle file selection and size validation
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > fileSizeLimit) {
      toast.error(`Please upload an image smaller than 2MB. Your file size is ${(file.size / (1024 * 1024)).toFixed(2)} MB.`);
      setImage(null);
    } else {
      setImage(file);
    }
  };

  // Handle image analysis request
  const handleAnalyze = async () => {
    if (!image) {
      toast.error('Select the image first');
      return;
    }
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', image);

      const response = await axios.post(`${PYTHON_MODEL_BASE_URL}/predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { confidence, prediction } = response.data;

      const userData = JSON.parse(localStorage.getItem('user'));
      if (!userData?.data?.user?._id) {
        throw new Error('User ID not found in local storage');
      }
      const userId = userData.data.user._id;
      console.log("Sending data:", {
        diseasePrediction: prediction,
        diseaseConfidence: confidence,
        user: userId
      });

      setDiseaseData({ confidence, prediction});
      await axios.post(`${BASE_URL}/api/records/savedata`, {
        diseasePrediction: prediction,
        diseaseConfidence: confidence,
        user_id: userId
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setLoading(false);
      toast.success('Data fetched successfully.');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error('Error response:', error.response);
        toast.error(`Error: ${error.response.data.message || error.response.statusText}`);
      } else {
        console.error('Error message:', error.message);
        toast.error(error.message || 'An error occurred.');
      }
    }
  };

  // Conditional rendering of disease information based on prediction
  const renderDiseaseInfo = () => {
    if (!diseaseData || !diseaseData.prediction) return null;

    switch (diseaseData.prediction) {
      case 'black-spot':
        return (
          <div className="container mx-auto px-4 py-8 shadow-2xl mt-4 bg-orange-500 rounded lg:px-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Black Spot Treatment</h1>
            <p className="text-lg mb-8">Unfortunately, there is no direct cure for black spot on fruits. However, there are strategies to manage the disease and prevent future outbreaks.</p>
          </div>
        );
      case 'citrus-canker':
        return (
          <div className="container mx-auto px-4 py-8 shadow-2xl lg:py-10 lg:mt-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Citrus Canker Treatment</h1>
            <p className="text-lg mb-8">Unfortunately, there is no direct cure for citrus canker. However, there are steps you can take to manage the disease and potentially slow its spread.</p>
          </div>
        );
      case 'fresh':
        return <div className="text-center">Fruit is fresh</div>;
      default:
        return null;
    }
  };

  // Render disease prediction and confidence details
  const renderDiseaseDetails = () => {
    if (!diseaseData) return null;

    return (
      <div className="text-center">
        <p>Disease Prediction: {diseaseData.prediction}</p>
        <p>Confidence: {diseaseData.confidence}</p>
      </div>
    );
  };

  return (
    <div className="printable-content">
      <motion.div className="md:flex md:text-center md:bg-cover overflow-hidden md:bg-no-repeat md:text-3xl md:text-white h-[9rem] md:h-[15rem] bg-cover bg-no-repeat text-2xl text-white py-8"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('${banner}')` }}>
        <motion.h1 initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="text-center lg:text-4xl md:m-auto md:leading-10 -z-1">
          Citrus Disease <label>Detection</label>
          <br />
          <label className="text-orange-500">Services</label>
        </motion.h1>
      </motion.div>

      <section className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8 overflow-hidden p-7 z-auto">
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <img src={rectangle} loading={lazy} className="w-82 p-6 md:w-80" alt="Rectangle" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 1 }} transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pl-8 flex-wrap">
          <h1 className="font-bold text-2xl md:text-4xl text-center pb-5 md:pb-10">Citrus <label className="text-orange-500">Diseases</label></h1>
          <p className="overflow-hidden text-md md:text-lg md:text-left leading-loose text-justify p-3">
            Leaves from healthy plants and plants infected with prevalent diseases (citrus greening, citrus canker, scab, greasy spot).
            {/* Additional content omitted for brevity */}
          </p>
        </motion.div>
      </section>

      <div className="upload-section md:m-auto rounded md:shadow-orange-800 md:mb-5 shadow-2xl overflow-hidden m-5 shadow-200 h-96 pt-8 flex flex-col items-center justify-center md:w-[87vw]">
        <div className="border-2 border-slate-300 rounded-lg overflow-hidden md:w-60 w-56 h-60 shadow-2xl flex flex-col items-center justify-center bg-gray-200">
          <label htmlFor="fileInput" className="file-label">
            <BsCloudUploadFill className="size-16 m-auto hover:cursor-pointer hover:text-orange-500 transition-all duration-200" />
            Drop your picture here
          </label>
          <input type="file" id="fileInput" name="input" className="hidden" accept="image/*" onChange={handleFileChange} />
          {image && (
            <p>{image.name}</p>
          )}
        </div>
        <button onClick={handleAnalyze} className="m-auto flex">
          <h1 className="md:w-32 md:p-2 p-1 gap-y-4 rounded-xl bg-orange-500 md:text-xl text-white text-xl cursor-pointer">
            Analyze
          </h1>
        </button>
      </div>

      <span className="flex justify-center items-center">
        {loading && (
          <l-spiral size="55" speed=".5" color="#f97316"></l-spiral>
        )}
      </span>

      {renderDiseaseDetails()}
      {diseaseData && <BarChart diseaseData={diseaseData} />}
      {renderDiseaseInfo()}
    </div>
  );
};

export default Main;
