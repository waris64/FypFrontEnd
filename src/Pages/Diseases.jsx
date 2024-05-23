import React from "react";
import "../App.css";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Slick_Slider from "../Components/Slick_Slider";
import Rectangle from "../assets/Rectangle 10.png";
import DiseaseImg from "../assets/Rectangle 12.png";
import Rec14 from "../assets/Rectangle 14.png";
import Rec19 from "../assets/Rectangle 19.png";
import Rec20 from "../assets/Rectangle 20.png";
import Rec21 from "../assets/Rectangle 21.png";
import Sidebar from "../Components/Sidebar";
import { motion } from "framer-motion";
const Diseases = () => {
  return (
    <div>
      <Nav logoSrc={Rectangle} />
      <Slick_Slider className="h-[9rem]" />
      <Sidebar className="fixed" />
      {/* <div className=' md:flex md:text-center md:bg-cover md:bg-no-repeat md:text-3xl md:text-white h-[9rem] md:h-[15rem]' style={{ backgroundImage: `url('${DiseaseImg}')` }}>
        <h1 className='md:mt-20 md:text-[8vh] text-3xl pt-10 text-center text-white md:m-auto m-auto md:leading-10'>Citrus Diseases </h1>
      </div> */}

      <section className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8 p-4 lg:pt-16 lg:items-center -mt-10">
        <motion.div
          className="w-full md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-bold text-xl pt-14 lg:text-2xl mb-4">
            <label className="text-orange-500 ">Citrus </label>Canker
          </h1>
          <p className="md:text-base md:leading-loose text-justify">
            Citrus greening, scientifically known as Huanglongbing (HLB), is a
            devastating citrus disease that has posed a significant threat to
            citrus crops worldwide. The disease is caused by the bacterium
            Candidatus Liberibacter asiaticus and is primarily transmitted by
            the Asian citrus psyllid, a tiny insect that feeds on citrus trees.
            Citrus greening has emerged as a major challenge for the citrus
            industry, affecting the production of oranges, grapefruits, lemons,
            and other citrus fruits.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Rec14} className="w-80 sm:p-4 p-4" alt="" />
        </motion.div>
      </section>

      <motion.section
        className="flex flex-col md:flex-row md:justify-around md:items-center  md:py-8 md:px-9 p-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className="font-bold text-xl md:text-2xl mb-4 ">
            Citrus <span className="text-orange-500">Greening</span>
          </h1>
          <img src={Rec19} className="h-72 sm:p-4 p-4" alt="" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="md:text-base md:leading-loose text-justify pt-6">
            Citrus greening, scientifically known as Huanglongbing (HLB), is a
            devastating citrus disease that has posed a significant threat to
            citrus crops worldwide. The disease is caused by the bacterium
            Candidatus Liberibacter asiaticus and is primarily transmitted by
            the Asian citrus psyllid, a tiny insect that feeds on citrus trees.
            Citrus greening has emerged as a major challenge for the citrus
            industry, affecting the production of oranges, grapefruits, lemons,
            and other citrus fruits.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8 p-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="font-bold text-xl md:text-2xl mb-4">
            Citrus{" "}
            <span className="md:text-orange-500 text-orange-500">Scab</span>{" "}
          </h1>
          <p className="md:text-base md:leading-loose text-justify">
            Citrus Scab, caused by the fungus Elsinoë fawcettii, is a prevalent
            and destructive disease affecting citrus crops worldwide. This
            pathogen primarily targets various citrus species, including
            oranges, lemons, and grapefruits, posing a significant threat to
            citrus production. Characterized by raised, scaly lesions on fruit
            surfaces, leaves, and stems, Citrus Scab not only diminishes the
            aesthetic appeal of the fruits but also hampers their market value.
          </p>
        </div>
        <div>
          <img src={Rec20} className="w-80 sm:p-4 p-4" alt="" />
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8 md:px-9 p-4"
        initial={{ opacity: 0, scale: -0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ duration: 1 }}
        >
          <h1 className="font-bold text-xl md:text-2xl mb-4">
            Citrus{" "}
            <span className="md:text-orange-500 text-orange-500">Tristeza</span>{" "}
            Virus
          </h1>
          <img src={Rec21} className="h-64 sm:p-4 p-4" alt="" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="md:text-base md:leading-loose  md:pt-8 ">
          Citrus Scab, caused by the fungus Elsinoë fawcettii, is a prevalent
            and destructive disease affecting citrus crops worldwide. This
            pathogen primarily targets various citrus species, including
            oranges, lemons, and grapefruits, posing a significant threat to
            citrus production. Characterized by raised, scaly lesions on fruit
            surfaces, leaves, and stems, Citrus Scab not only diminishes the
            aesthetic appeal of the fruits but also hampers their market value.
          </p>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Diseases;
