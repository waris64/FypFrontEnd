import React, { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import Logo from '../assets/Rectangle 10.png';
import admin from '../assets/bgadmin.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import { useAuth } from './AuthProvider';
import { FaUser } from "react-icons/fa";
import toast from 'react-hot-toast';

const Register = () => {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            toast.error("Please fill all fields.")
        }
        try {
            setLoading(true)
            setErrorMessage(null)
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (data.success === false) {
                return setErrorMessage(data.message)
            }
            if (!res.ok) {
                toast.error(data.error)
            }
            setLoading(false)
            if (res.ok) {
                toast.success("Register Successfully.")
                navigate('/login')
            }
        } catch (error) {
            setErrorMessage(error.message)
            setLoading(false)
        }
    }

    return (
        <>
            <div
                className='lg:flex lg:p-4 lg:justify-between lg:gap-x-6 min-h-screen adjust'
            >
                <div className='lg:w-3/2 p-3 w-full  lg:min-h-full bg-contain md:flex md:justify-center md:items-center relative '>
                    <div
                        className='absolute top- md:-top-10 -left-10 lg:-top-[15px]'
                        style={{ zIndex: 10 }}
                    >
                        <img src={admin} className='hidden lg:block lg:h-[150vh]' alt="Background" />
                    </div>
                    <div
                        className={`md:w-96 md:mt-24 px-5 py-12  bg-white shadow-2xl border     flex flex-col justify-center rounded-3xl lg:min-h-full lg:mt-16`}
                        style={{ zIndex: 10 }}
                    >
                        <img src={Logo} className='m-auto' alt="Logo" />
                        <p className='m-auto font-bold text-lg lg:pt-7 lg:-mt-9'>
                            Sign Up <span className='text-orange-500'>Here</span>
                        </p>

                        <form className='flex flex-col py-9 font-semibold   ' onSubmit={handleSubmit}>
                            <label htmlFor='name'>Name:</label>
                            <div className='relative mt-2'>
                                <input
                                    required
                                    type='text'
                                    name='username'
                                    placeholder='Name'
                                    id='username'
                                    className='w-full pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className=' h-full flex items-center px-2'>
                                        <FaUser className='size-6 rounded text-orange-500' />
                                    </div>
                                </div>
                            </div>
                            <label htmlFor='email'>Email:</label>
                            <div className='relative mt-2'>
                                <input
                                    required
                                    type='email'
                                    name='email'
                                    placeholder='E-mail'
                                    id='email'
                                    className='w-full pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className=' h-full flex items-center px-2'>
                                        <MdEmail className='size-6 rounded text-orange-500' />
                                    </div>
                                </div>
                            </div>

                            <label htmlFor='password' className='mt-5'>
                                Password:
                            </label>
                            <div className='relative mt-2'>
                                <input
                                    required
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    id='password'
                                    className='w-full pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className=' h-full flex items-center px-2.5'>
                                        <MdLock className='text-orange-500 size-6 rounded' />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'

                                className='flex items-center justify-center m-auto  w-52 rounded-xl py-3 mt-5 border-2 hover:bg-orange-500 duration-500'
                            >
                                Sign Up
                            </button>

                            <Link to={'/login'} className='text-center pt-3 text-blue-900 font-semibold text-sm '>Login <span className='text-orange-500'>here</span>  </Link>

                        </form>
                    </div>
                </div>
                <div className='bg-white hidden lg:flex lg:flex-col lg:justify-center lg:w-screen lg:p-16 lg:items-center '>
                    <h1 className='font-bold lg:text-3xl lg:pb-5 text-center'>
                        W E L C O M E <span className='text-orange-500 animate-'>TO</span> THE CITRUS DISEASE <span className='text-orange-500 animate-pulse duration-50'>DETECTION</span> SYSTEM
                    </h1>
                    <p className='text-center leading-6'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type
                    </p>
                </div>

            </div>
        </>
    );
};

export default Register;
