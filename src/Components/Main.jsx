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
import { spiral } from 'ldrs';
import { lazy } from "react";
spiral.register()
const Main = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diseaseData, setDiseaseData] = useState(null);
  const fileSizeLimit = 2 * 1024 * 1024;
  const handleFileChange = (event) => {
    const file = event.target.files[0];
if(file && file.size>fileSizeLimit){
    toast.success("please upload the image of less than 2MB . Your file size is ",file.size)
    setImage(null);
  }else{
    setImage(file)
  }
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


      const userData = JSON.parse(localStorage.getItem('user'));
      console.log(userData, "data from local storage");
      const userId = userData?.data?.user?._id;


      if (!userId) {
        throw new Error('User ID not found in local storage');
      }

      setDiseaseData({ confidence, prediction });
      const secondApiResponse = await axios.post("http://localhost:8080/api/records/savedata", { diseasePrediction: prediction, diseaseConfidence: confidence, user_id: userId }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const secondApiData = secondApiResponse.data;

      console.log(secondApiData, "second api ");

      setLoading(false);
      toast.success('Data fetched successfully.');
    } catch (error) {
      setLoading(false);
      toast.error(error.message || 'An error occurred.');
    }
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

      <section className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8 overflow-hidden p-7 ">
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <img src={rectangle} loading={lazy} className="w-82 p-6 md:w-80 2xl:w-96" alt="Rectangle" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 1 }} transition={{ duration: 1 }}
          className="w-full md:w-1/2 md:pl-8 flex-wrap ">
          <h1 className="font-bold text-2xl md:text-4xl text-center pb-5 md:pb-10 2xl:text-4xl ">
            Citrus <label className="text-orange-500 md:text-orange-500"> Diseases</label>
          </h1>
          <p className="overflow-hidden text-md md:text-lg md:text-left leading-loose text-justify p-3 2xl:text-4xl">
            Leaves from healthy plants and plants infected with prevalent
            diseases (citrus greening, citrus canker, scab, greasy spot). Citrus
            greening is the most serious citrus disease caused by a bacteria
            which is spread by the Asian citrus psyllid (ACP). ACP is a tiny
            insect that transmits the bacteria to the tree when feeding.
          </p>
        </motion.div>
      </section>

      <div className="upload-section 2xl:mb-44 2xl:mt-44 2xl:h-96  md:m-auto rounded md:shadow-orange-800 md:mb-5 shadow-2xl overflow-hidden m-5 shadow-200 h-96 pt-8 flex flex-col items-center justify-center md:w-[87vw]">
        <div className="border-2 border-slate-300 rounded-lg overflow-hidden md:w-60 w-56 h-60 shadow-2xl flex flex-col items-center justify-center bg-gray-200 ">
          <label htmlFor="fileInput" className="file-label">
            <BsCloudUploadFill className="size-16 m-auto hover:cursor-pointer hover:text-orange-500 transition-all duration-200 2xl:text-4xl" />
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
      <span className="flex justify-center items-center">{loading &&
        <>
          <l-spiral
            size="55"
            speed=".5"
            color="#f97316"

          ></l-spiral></>}</span>
      {diseaseData && <BarChart diseaseData={diseaseData} />}
      {/* {diseaseData &&
        <div className=" rounded-lg bg-gradient-to-t from-orange-400 to-orange-500 w-1/2 p-6 lg:p-10 lg:text-4xl    text-left m-auto transition ease-in   " >

          <div className="pl-20 lg:pl-36 lg:leading-loose font-semibold text-lg ">Disease Detected: <span className="text-slate-200 font-mono"> {diseaseData.prediction}</span> <br />
            Disease Confidence: <span className="text-slate-200 font-mono text-left">{diseaseData.confidence}</span >
          </div>
        </div>
        
        
      } */}
      <div>
        <div>
          {diseaseData && diseaseData.prediction ? (
            (() => {
              switch (diseaseData.prediction) {
                case 'black-spot':
                  return <div class="container mx-auto px-4 py-8 shadow-2xl mt-4 bg-orange-500 rounded  lg:px-10 ">
                    <h1 class="text-3xl font-bold mb-8 text-center">Black Spot Treatment</h1>
                    <p class="text-lg mb-8">Unfortunately, there is no direct cure for black spot on fruits. However, there are strategies to manage the disease and prevent future outbreaks.</p>

                    <h2 className="font-semibold text-xl">Prevention</h2>
                    <p class="text-lg mb-4">Prevention is the best approach. Here are some key strategies:</p>
                    <ul class="list-disc pl-4 mb-8">
                      <li class="mb-2">
                        <span class="font-bold">Cultural Practices:</span> Proper orchard hygiene, including removing fallen fruits and debris, promotes good air circulation and reduces moisture that favors fungal growth.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Fungicides:</span> Applying preventative fungicide sprays before the rainy season or when conditions favor fungal growth can be helpful. However, follow application instructions carefully and choose products suitable for the specific fruit type and local regulations.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Planting Resistant Varieties:</span> Researching and planting varieties known for black spot resistance can significantly reduce issues.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Irrigation Management:</span> Avoiding overhead irrigation and opting for drip irrigation minimizes the spread of fungal spores through splashing water.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Calcium Sprays:</span> Applying calcium supplements to fruits during development can strengthen cell walls and potentially improve resistance to black spot.
                      </li>
                    </ul>

                    <h2 className="font-bold text-xl">Post-Harvest Management</h2>
                    <p class="text-lg mb-4">Proper handling and storage practices can help minimize post-harvest losses from black spot:</p>
                    <ul class="list-disc pl-4 mb-8">
                      <li class="mb-2">
                        <span class="font-bold">Proper Handling:</span> Careful handling during harvest to minimize fruit injuries reduces entry points for fungal spores.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold text-md">Post-harvest Fungicides:</span> Dipping or spraying harvested fruits with approved fungicides can offer some protection during storage and transport.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Storage Conditions:</span> Maintaining proper storage temperature and humidity can help slow down fungal growth and extend shelf life.
                      </li>
                    </ul>

                    <p class="text-lg mb-4">
                      <b>Important Note: </b> If you suspect black spot on your fruits, consult your local agricultural extension service for specific recommendations. They can advise on the best course of action depending on the severity of the infection, fruit type, and local regulations.
                    </p>

                    <p class="text-lg mb-4 font-semibold ">
                      Additional Information:
                    </p>
                    <ul class="list-disc pl-4 mb-8">
                      <li class="mb-2">The specific type of black spot and the fruit it infects can influence the most appropriate management strategies.</li>
                      <li class="mb-2">Always identify the fungus causing the black spot before implementing any control measures.</li>
                      <li class="mb-2">Organic options for black spot management are available, but may require a more holistic approach combining preventative cultural practices with biological controls.</li>
                    </ul>
                    <p class="text-lg">Remember, this is a general overview. For detailed information on black spot specific to your fruit type and region, consult with your local agricultural extension service or reputable gardening resources.</p>
                  </div>
                case 'citrus-canker':
                  return <div class="container mx-auto px-4 py-8 shadow-2xl lg:py-10 lg:mt-4 ">
                    <h1 class="text-3xl font-bold mb-8 text-center">Citrus Canker Treatment</h1>
                    <p class="text-lg mb-8">Unfortunately, there is no direct cure for citrus canker. However, there are steps you can take to manage the disease and potentially slow its spread.</p>

                    <h2 className="text-3xl pb-4 font-semibold">Prevention</h2>
                    <p class="text-lg mb-4">Prevention is the best approach. Here are some tips:</p>
                    <ul class="list-disc pl-4 mb-8">
                      <li class="mb-2">Keep your citrus fruit healthy with proper watering and fertilization.</li>
                      <li class="mb-2">Avoid injuring your fruit during pruning or other maintenance.</li>
                      <li>Be vigilant about spotting signs of canker. Look for raised, wart-like lesions on leaves, stems, and fruit.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">Additional Strategies</h2>
                    <p class="text-lg mb-4">While prevention is key, here are some additional strategies to consider:</p>
                    <ul class="list-disc pl-4 mb-8">
                      <li class="mb-2">
                        <span class="font-bold">Copper Sprays:</span> These can offer some protection, especially on young fruit. However, follow application instructions carefully to avoid harming your fruit.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Resistant Varieties:</span> Planting citrus varieties known for canker tolerance can help reduce its impact. Research varieties suitable for your climate.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Windbreaks:</span> Wind can spread the disease through rain. Planting windbreaks around your citrus fruit can help reduce this risk.
                      </li>
                      <li class="mb-2">
                        <span class="font-bold">Leafminer Control:</span> Leafminers create wounds that make fruit more susceptible to canker infection. Controlling leafminers can help indirectly reduce canker.
                      </li>
                    </ul>

                    <p class="text-lg mb-4">
                      <b>Important Note:</b> If you suspect citrus canker in your fruit, it's crucial to contact your local agricultural extension service for specific recommendations.  They can advise you on the best course of action depending on the severity of the infection and local regulations.
                    </p>

                    <p class="text-lg mb-4">For more details on citrus canker and its management, refer to these resources:</p>
                    <ul class="list-disc pl-4">
                      <li class="mb-2">
                        <a href="https://crec.ifas.ufl.edu/research/citrus-production/disease-identification/citrus-canker/" class="text-blue-500 underline">University of Florida IFAS Extension: Citrus Canker</a>
                      </li>
                      <li class="mb-2">
                        <a href="https://www.cdfa.ca.gov/citrus/pests_diseases/ccd.html" class="text-blue-500 underline">California Department of Food and Agriculture: Citrus Canker</a>
                      </li>
                    </ul>
                  </div>
                case 'fresh':
                  return <div className="text-center">Fruit is fresh</div>;
                default:
                  return null;
              }
            })()
          ) : (
            () => {
              return null;
            }
          )}
        </div>

      </div>




    </div>
  );
};

export default Main;
