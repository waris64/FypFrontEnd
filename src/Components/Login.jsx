import React, { useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import Logo from '../assets/Rectangle 10.png';
import back from '../assets/back.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Login = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.email || !formData.password) {
            return toast.error("Please fill all the fields");
        }
        try {
            const res = await fetch('https://fyp-back-end-tan.vercel.app/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (res.status === 200) {
                const userData = JSON.stringify(data);
                localStorage.setItem('user', userData);
                navigate('/');
            } else {
                toast.error("Invalid Credentials");
            }
        } catch (error) {
            console.log(error);
            toast.error("Invalid Credentials")
        }
    }

    return (
        <>
            <div
                data-theme='light'
                className='lg:flex lg:p-4 lg:justify-between lg:gap-x-6 min-h-screen adjust'
            >
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
                <div className='lg:w-3/2 p-3 w-full lg:bg-white  bg-contain md:flex md:justify-center md:items-center relative'>
                    <div
                        className='absolute  md:-top-10 -left-10 lg:-top-[15px] '
                        style={{ zIndex: 10 }}
                    >
                        <img src={back} className='hidden lg:block' alt="Background" />
                    </div>
                    <div
                        className={`md:w-96 md:mt-24 px-5 py-12 bg-white  flex flex-col justify-center rounded-3xl lg:min-h-full lg:mt-16`}
                        style={{ zIndex: 10 }}
                    >
                        <img src={Logo} className='m-auto' alt="Logo" />
                        <p className='m-auto font-bold text-lg lg:pt-7 lg:-mt-9'>
                            Sign Into <span className='text-orange-500'>Your</span> Account
                        </p>

                        <form className='flex flex-col py-9 font-semibold' onSubmit={handleSubmit}>
                            <label htmlFor='email'>Email:</label>
                            <div className='relative mt-2'>
                                <input
                                    required
                                    type='email'
                                    name='username'
                                    placeholder='E-mail'
                                    id='email'
                                    className='w-full pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className='bg-darkorange h-full flex items-center px-2'>
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
                                    id='password'
                                    placeholder='Password'
                                    className='w-full pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none focus:ring-0 focus:border-textActive'
                                    onChange={handleChange}
                                />
                                <div className='absolute inset-y-0 left-0 pr-3 flex items-center pointer-events-none'>
                                    <div className='bg-darkorange h-full flex items-center px-2.5'>
                                        <MdLock className='text-orange-500 size-6 rounded' />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='flex items-center justify-center m-auto  w-52 rounded-xl py-3 mt-5 border-2 hover:bg-orange-500 duration-500'
                            >
                                Log In
                            </button>
                            <Link to={'/register'} className='text-center pt-3 text-blue-900 font-semibold text-sm'>SignUp <span className='text-orange-500'>here</span>  </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
