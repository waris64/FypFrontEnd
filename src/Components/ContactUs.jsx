import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Rectangle from "../assets/Rectangle 10.png";
import Footer from "./Footer";
import toast from "react-hot-toast";

const ContactUs = () => {
  const showToast = () => {
     toast.success("Data received")
  };

  return (
    <>
      <Nav logoSrc={Rectangle} />
      <div className="md:flex md:flex-col md:items-center">
        <Sidebar className="md:hidden" />
        <h1 className="font-bold text-2xl py-8 text-center">
          Get in <label className="text-orange-500">touch</label>
        </h1>
        <form
          action="#"
          className="md:w-80 border-2 rounded-md bg-zinc-400 p-9 m-2 leading-8"
        >
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border-2 rounded py-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="border-2 rounded py-4"
            />
          </div>
          <div className="m-auto text-center">
            <button
              type="button"
              onClick={showToast}
              className="bg-orange-400 px-6 rounded mt-6"
            >
              Submit
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
