import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import logo from '../assets/logoicon.png';
import Menu from '../components/Menu';

const Contact = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleFormSubmit = () => {
        navigate('/thank-you')
    }
    
    return(
        <div className="min-h-screen flex flex-col items-center">
            <header className="bg-primary text-white text-center py-1 w-full">
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
            <div className='text-2xl font-bold flex mt-10'>
                    Call
                </div>
            <div className="border-4 border-black rounded-lg flex flex-col justify-center mt-2 items-center mb-5 p-2">
                (213) 482-3477 or (800) 944-2200
            </div>
            OR
            <div className='font-bold text-2xl mt-5'>
                Email
            </div>
            <main className="flex-col flex-1 mt-2">
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
    )
}

export default Contact;
