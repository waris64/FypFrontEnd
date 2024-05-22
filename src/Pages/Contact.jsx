import React from 'react'
import ContactUs from '../Components/ContactUs'
import Nav from '../Components/Nav'
import Rectangle from '../assets/Rectangle 10.png'
const Contact = () => {
  return (
    <>
      <Nav logoSrc={Rectangle} className="hidden"/>
      <ContactUs className="hidden"/>
    </>
  )
}

export default Contact