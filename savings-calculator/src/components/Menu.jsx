import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import logo from '../assets/logo.png';

const Menu = ({ isDrawerOpen, toggleDrawer, navigate }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggleDrawer();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen, toggleDrawer]);

  const drawerStyles = {
    transition: 'transform 300ms ease-in-out',
    transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
  };

  return (
    <>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleDrawer}></div>
      )}
      <Transition in={isDrawerOpen} timeout={0}>
        {(state) => (
          <div
            ref={drawerRef}
            className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 flex flex-col justify-between ${state === 'entered' ? 'block' : 'hidden'}`}
            style={{ ...drawerStyles, width: '200px' }} 
          >
            <div className="flex-grow p-4 overflow-y-auto">
              <button
                onClick={toggleDrawer}
                className="absolute top-2 left-2 text-primary flex items-center justify-center p-2 text-2xl focus:outline-none transition duration-300 rounded-full hover:bg-gray-300"
                style={{ width: '36px', height: '36px' }} 
              >
                &times;
              </button>
              <nav className="mt-16 flex flex-col items-center justify-center"> 
                <ul className="space-y-7">
                  <li>
                    <button onClick={() => { navigate('/'); toggleDrawer(); }} className="text-primary p-2 text-xl hover:underline">
                      Calculator
                    </button>
                  </li>
                  <li>
                    <a href='https://app.loanspq.com/xa/xpressApp.aspx?enc=Kw21Wblm1yxpjJabdoZaD9P5Ohrb21U42vf4mi4ehVOHesN2P5T0h5-U4tYLIGz1pbxW5gXLDq4i9XcbQAEpui6QgaQp7OmdIC4KX01JRaLYmxn24WPdjZkK9UMNSPC3' target="_blank" rel="noopener noreferrer" className="text-primary p-2 text-xl hover:underline">
                      Open Account
                    </a>
                  </li>
                  <li>
                    <button onClick={() => { navigate('/contact'); toggleDrawer(); }} className="text-primary p-2 text-xl hover:underline">
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-center items-center p-4">
              <a href='https://www.firstcitycu.org/' target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="First City Logo" className="w-40 h-28 object-contain" />
              </a>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Menu;
