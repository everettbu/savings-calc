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
        <h1 className="text-2xl font-bold">Contact</h1>
      </header>
      <Menu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} navigate={navigate} />
      <div className="flex flex-col items-center mt-10 px-4">
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
        </main>
      </div>
    </div>
  );
};

export default Contact;
