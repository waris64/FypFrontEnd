import React, { useEffect, useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import Logo from '../assets/Rectangle 10.png';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import {  VERCEL_BASE_URL } from "../API.Config"

const Login = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!formData.email || !formData.password) {
            return toast.error("Please fill all the fields");
        }
        setLoading(true);
        try {
            const res = await fetch(`${VERCEL_BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.status === 200) {
                const userData = JSON.stringify(data);
                localStorage.setItem('user', userData);
                navigate('/'); // Navigate to the desired route after login
            } else {
                toast.error("Invalid Credentials");
            }
        } catch (error) {
            toast.error("Invalid Credentials");
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mt-14 px-4 py-4 text-sm md:m-auto md:text-lg lg:flex lg:p-4 lg:justify-between lg:gap-x-6 xl:px-10'>
            <div className='bg-white hidden lg:flex lg:flex-col lg:justify-center lg:w-screen lg:p-16 lg:items-center 2xl:w-full'>
                <h1 className='font-bold lg:text-3xl lg:pb-5 text-center'>
                    W E L C O M E <span className='text-orange-500 animate-'>TO</span> THE CITRUS DISEASE <span className='text-orange-500 animate-pulse'>DETECTION SYSTEM</span>
                </h1>
                <p className='text-center leading-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type
                </p>
            </div>
            <div className='flex flex-col pt-4 px-4 md:w-3/5 md:items-center md:m-auto md:pt-14 lg:py-5 lg:px-16 lg:w-2/3 justify-center rounded-3xl bg-[rgb(255,127,62)]'>
                <img src={Logo} loading="lazy" className='m-auto rounded-md' alt="Logo" />
                <p className='m-auto font-bold text-lg pt-5 lg:pt-7'>
                    Sign Into Your Account
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
                            className='w-full pl-12 pr-4 2xl:px-52 2xl:pl-10 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none focus:ring-0 focus:border-textActive'
                            onChange={handleChange}
                        />
                        <div className='absolute inset-y-0 flex items-center pointer-events-none'>
                            <div className='bg-darkorange h-full flex items-center px-2'>
                                <MdEmail className='size-6 rounded text-orange-500' />
                            </div>
                        </div>
                    </div>
                    <label htmlFor='password' className='pt-5'>
                        Password:
                    </label>
                    <div className='relative pt-2'>
                        <input
                            required

autoComplete='current-password'                            type='password'
                            name='password'
                            id='password'
                            placeholder='Password'
                            className='w-full pl-12 py-4 rounded-lg bg-[#F5F5F7] focus:outline-none focus:ring-0 focus:border-textActive'
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
                        id='submit'
                        onClick={handleSubmit}
                        className='flex items-center justify-center font-semibold m-auto w-52 rounded-xl py-3 mt-5 border-2 hover:bg-orange-500 duration-500'
                    >
                        Log In
                    </button>
                    <Link to={'/register'} className='text-center pt-2 font-bold text-sm md:text-lg md:font-semibold'>SignUp <span className='text-white underline'>here</span></Link>
                    <span className='text-center pt-5'>{loading && (
                        <l-spiral
                            size="45"
                            speed=".7"
                            color="#fe8400"
                        ></l-spiral>
                    )}</span>
                </form>
            </div>
        </div>
    );
};

export default Login;
