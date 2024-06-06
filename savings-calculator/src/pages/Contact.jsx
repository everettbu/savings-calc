import React from 'react';

const Contact = () => {
    return(
        <div className="min-h-screen flex flex-col">
            <header className="bg-primary text-white text-center py-4 w-full">
                <h1 className="text-4xl font-bold">Contact First City Credit Union</h1>
            </header>
            <main className="flex-col flex-1">
                <div className="justify-center p-10">
                    <div className="flex justify-center">
                    <a href="https://www.firstcitycu.org/contact/email/" target="_blank">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mb-4 justify-center">
                            Contact via Email
                        </button>
                    </a>
                    </div>
                    <div className='flex justify-center p-5'>
                        OR
                    </div>
                    <div className='flex justify-center'>
                        Call: (213) 482-3477 or (800) 944-2200
                    </div>
                </div>
            </main>
        </div>    
    )
}

export default Contact;
