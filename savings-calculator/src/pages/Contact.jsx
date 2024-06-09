import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return(
        <div className="min-h-screen flex flex-col items-center">
            <header className="bg-primary text-white text-center py-1 w-full">
                <h1 className="text-2xl font-bold">Contact First City</h1>
            </header>
            <div className="border-4 border-secondary rounded-sm flex justify-center mt-10">
                Call: (213) 482-3477 (if from 213 or adjacent area codes) or (800) 944-2200
            </div>
            <main className="flex-col flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <ContactForm
                    formClass="space-y-6"
                    inputClass="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
                    labelClass="block text-sm font-medium text-gray-700"
                    errorClass="text-red-500 text-sm mt-1"
                    />
                    <button
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 mt-4"
                >
                    Send
                </button>
                </div>
                
            </main>
        </div>    
    )
}

export default Contact;
