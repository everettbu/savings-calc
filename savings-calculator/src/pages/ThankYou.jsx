import React from 'react';
import logo from '../assets/firstcity.png';
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="bg-primary text-white text-center py-1 w-full">
                <h1 className="text-2xl font-bold">Contact First City</h1>
                <a href='https://www.firstcitycu.org/' target="_blank" rel="noopener noreferrer">
                    <img
                    src={logo}
                    alt="Logo"
                    className="absolute top-1 right-5 w-8 h-8 object-contain"
                    />
                </a>
            </header>
            <CiCircleCheck size={'80px'} style={{marginTop: '140px'}} fill='green'/>
            <div className='flex text-4xl' style={{marginTop: '30px'}}>
                Thank you for your inquiry!
            </div>
            <div className='flex text-xl' style={{marginTop: '10px'}}>
                A copy has been sent to your email.
            </div>
            <div>
                <button
                onClick={goToHome}
                className='bg-tertiary text-white px-4 py-2 rounded-lg opacity-90 hover:bg-primary-dark hover:shadow-lg transition duration-300 mt-20 transform hover:scale-105'
                >
                    Return to Home
                </button>
            </div>
        </div>
    )
}

export default ThankYou;