import React, { lazy, useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import Logo from '../assets/Rectangle 10.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import toast from 'react-hot-toast';
import { BASE_URL_VERCEL} from "../API.Config"

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
            const res = await fetch(`${BASE_URL_VERCEL}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (data.success === false) {
                if(data.message==="Username is Already taken"){
                    toast.error=("data.message")
                }else{
                    setErrorMessage(data.message)
                }
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
                className='lg:flex lg:p-4 lg:justify-between   '
            >
                <div className='relative lg:w-full p-3 w-full   bg-contain md:flex md:justify-center md:items-center xl:w-3/5 xl:h-full '>
                    <div
                        className={`flex flex-col justify-center rounded-3xl text-sm px-5  py-12  shadow-2xl border   bg-[rgb(255,127,62)] md:w-96  lg:w-full  lg:text-xl 2xl:w-full 2xl:py-40 2xl:px-44`}
                     
                    >
                        <img src={Logo} loading={lazy} className='m-auto rounded-xl pb-7 md:pb-0 lg:pb-0 2xl:pb-0 2xl:size-44' alt="Logo" />
                        <p className='m-auto font-bold md:text-sm md:pt-5  2xl:-pt-96  2xl:text-5xl lg:text-xl'>
                            Sign Up <span className='text-white '>Here</span>
                        </p>

                        <form className='flex flex-col py-9  font-semibold  gap-y-3 md:text-sm  lg:text-lg 2xl:gap-y-8 2xl:text-5xl  ' onSubmit={handleSubmit}>
                            <label htmlFor='name'>Name:</label>
                            <div className='relative'>
                                <input
                                    required
                                    type='text'
                                    name='username'
                                    placeholder='Name'
                                    id='username'
                                    className='w-full pl-12 pr-4 py-2 rounded-lg  bg-[#F5F5F7] 2xl:py-6 2xl:px-24 focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className=' h-full flex items-center px-2'>
                                        <FaUser className='size-6 2xl:size-14 rounded text-orange-500' />
                                    </div>
                                </div>
                            </div>
                            <label htmlFor='email' >Email:</label>
                            <div className='relative'>
                                <input
                                    required
                                    type='email'
                                    name='email'
                                    placeholder='E-mail'
                                    id='email'
                                    className='w-full pl-12 pr-4 py-2 rounded-lg bg-[#F5F5F7]   2xl:py-6 2xl:px-24 focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className=' h-full flex items-center px-2'>
                                        <MdEmail className='size-6 rounded text-orange-500 2xl:size-14' />
                                    </div>
                                </div>
                            </div>

                            <label htmlFor='password' className=''>
                                Password:
                            </label>
                            <div className='relative '>
                                <input
                                    required
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    id='password'
                                    className='w-full pl-12 pr-4 py-2 rounded-lg bg-[#F5F5F7] 2xl:px-24 2xl:py-6 focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className=' h-full flex items-center px-2.5'>
                                        <MdLock className='text-orange-500 size-6 rounded 2xl:size-14' />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                id='submit'
                                className='flex items-center justify-center m-auto  w-52 rounded-xl py-2  border-2 lg:mt-4 2xl:w-1/2 2xl:py-10 hover:bg-orange-500 duration-500'
                            >
                                Sign Up
                            </button>

                                <Link to={'/login'} className='text-center   font-semibold text-sm  2xl:text-5xl  lg:pt-4  lg:text-xl 2xl:pb-6'>Login <span className='text-white underline'>here</span>  </Link>

                        </form>
                    </div>
                </div>
                <div className='bg-white hidden lg:flex lg:flex-col lg:justify-center lg:w-screen lg:p-16 lg:items-center 2xl:w-full'>
                    <h1 className='font-bold  text-center lg:text-3xl lg:pb-5 xl:text-3xl 2xl:text-6xl 2xl:leading-relaxed'>
                        W E L C O M E <span className='text-orange-500 animate-'>TO</span> THE CITRUS DISEASE <span className='text-orange-500 animate-pulse duration-50 '>DETECTION</span> SYSTEM
                    </h1>
                    <p className='text-center leading-6 lg:text-xl lg:leading-relaxed 2xl:text-5xl 2xl:py-8 2xl:leading-loose'>
                        Welcome to our Citrus Disease Prediction System! Signing up opens the door to a transformative journey in citrus farming. By registering, you gain access to cutting-edge technology that predicts and mitigates diseases affecting citrus crops.Let's cultivate a future of resilience and abundance together!
                    </p>
                </div>

            </div>
        </>
    );
};

export default Register;
