import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import logo from '../assets/logoicon.png';
import Menu from '../components/Menu';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleFormSubmit = () => {
    navigate('/thank-you');
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
      <div className="flex flex-col items-center mt-10 px-4">
        <div className="flex items-center text-2xl font-bold mb-2">
          <FaPhone className="mr-2" /> Call
        </div>
        <div className="border-4 border-black rounded-lg flex flex-col justify-center items-center mb-5 p-4 bg-white shadow-md">
          (213) 482-3477 or (800) 944-2200
        </div>
        <div className="text-2xl font-bold mt-5 flex items-center">
          <FaEnvelope className="mr-2" /> Email
        </div>
        <main className="flex flex-col items-center w-full mt-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <ContactForm
              initialValues={{
                inquiryType: '',
                userName: '',
                email: '',
                streetAddress: '',
                city: '',
                state: '',
                zip: '',
                comment: ''
              }}
              formClass="space-y-6"
              inputClass="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
              labelClass="block text-sm font-medium text-gray-700"
              errorClass="text-red-500 text-sm mt-1"
              onSubmit={handleFormSubmit}
            />
            <button
              type="submit"
              form="contact-form"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 mt-4"
            >
              Send
            </button>
          </div>
          <div className="w-full max-w-md text-sm mt-4 px-4 text-center">
            In most cases, we will reply to your email within two working days. Please note that this is NOT a secured email. DO NOT include personal information such as account numbers, social security numbers, or driver license numbers in emails sent through our website (outside of FirstCity online banking and bill payment login areas, which are secure).
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
