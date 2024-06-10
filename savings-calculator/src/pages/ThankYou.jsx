import React, { useState } from 'react';
import logo from '../assets/logoicon.png';
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';

const ThankYou = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="bg-primary text-white text-center py-1 w-full relative">
        <button
          onClick={toggleDrawer}
          className="absolute bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300 shadow-md flex items-center justify-center"
          style={{ top: '-1px', left: '10px', width: '40px', height: '40px', fontSize: '1.5rem' }}
        >
          ☰
        </button>
        <h1 className="text-2xl font-bold">Contact First City</h1>
        <a href='https://www.firstcitycu.org/' target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-1 right-5 w-8 h-8 object-contain"
          />
        </a>
      </header>
      <Menu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} navigate={navigate} />
      <CiCircleCheck size={'80px'} style={{ marginTop: '140px' }} fill='green' />
      <div className='flex text-4xl' style={{ marginTop: '30px' }}>
        Thank you for your inquiry!
      </div>
      <div className='flex text-xl' style={{ marginTop: '10px' }}>
        A copy has been sent to your email.
      </div>
      <div>
        <button
          onClick={goToHome}
          className='bg-tertiary text-white px-4 py-2 rounded-lg opacity-90 hover:bg-tertiary-dark hover:shadow-lg transition duration-300 mt-20 transform hover:scale-105'
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
