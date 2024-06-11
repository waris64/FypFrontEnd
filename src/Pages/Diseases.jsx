import React, { lazy } from "react";
import "../App.css";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Slick_Slider from "../Components/Slick_Slider";
import Rectangle from "../assets/Rectangle 10.png";
import DiseaseImg from "../assets/Rectangle 12.png";
import Scab from "../assets/scab.png";
import Rec19 from "../assets/Rectangle 19.png";
import Rec20 from "../assets/Rectangle 20.png";
import Rec21 from "../assets/Rectangle 21.png";
import Sidebar from "../Components/Sidebar";
import { motion } from "framer-motion";
const Diseases = () => {
  return (
    <div>
      <Nav/>
      <Slick_Slider className="h-[9rem]" />
      <Sidebar className="fixed" />
      <section className="flex flex-col md:flex-row md:justify-around md:items-center md:py-8 p-4 lg:pt-16 lg:items-center -mt-10">
        <motion.div
          className="w-full md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-bold text-xl  pt-14 lg:text-2xl mb-4  2xl:text-6xl">
            <label className="text-orange-500 ">Citrus </label>Canker
          </h1>
          <p className="md:text-base 2xl:text-4xl md:leading-loose text-justify">
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
          <img src={Scab}  loading={lazy} className="h-64 md:h-64 lg:h-64 2xl:h-96 sm:p-4 p-4" alt="" />
        </motion.div>
      </section>

      <motion.section
        className="flex flex-col md:flex-row md:justify-around md:items-center  md:py-8 md:px-9 p-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className="font-bold text-xl 2xl:text-6xl md:text-2xl mb-4 ">
            Citrus <span className="text-orange-500">Greening</span>
          </h1>
          <img src={Rec19}  loading={lazy} className="h-64 md:h-64 lg:h-64 2xl:h-96 sm:p-4 p-4" alt="" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="md:text-base md:leading-loose 2xl:text-4xl text-justify pt-6">
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
          <h1 className="font-bold text-xl  2xl:text-6xl md:text-2xl mb-4">
            Citrus{" "}
            <span className="md:text-orange-500 2xl:text-6xl text-orange-500">Scab</span>{" "}
          </h1>
          <p className="md:text-base md:leading-loose text-justify 2xl:text-4xl">
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
          <img src={Rec20}  loading={lazy} className="h-64 md:h-64 lg:h-64 2xl:h-96 sm:p-4 p-4" alt="" />
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
          <h1 className="font-bold text-xl md:text-2xl mb-4 2xl:text-6xl">
            Citrus{" "}
            <span className="md:text-orange-500 text-orange-500 2xl:text-6xl">Tristeza</span>{" "}
            Virus
          </h1>
          <img src={Rec21}  loading={lazy} className="h-64 md:h-64 lg:h-64 2xl:h-96 sm:p-4 p-4" alt="" />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <p className="md:text-base md:leading-loose  md:pt-8  2xl:text-4xl">
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
