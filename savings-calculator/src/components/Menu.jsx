// src/components/Menu.jsx
import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

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
    <Transition in={isDrawerOpen} timeout={300}>
      {(state) => (
        <div
          ref={drawerRef}
          className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 p-4 ${state === 'entered' ? 'block' : 'hidden'}`}
          style={{ ...drawerStyles, width: '200px' }} 
        >
          <button
            onClick={toggleDrawer}
            className="absolute top-2 left-2 text-primary flex items-center justify-center p-2 text-2xl focus:outline-none transition duration-300 rounded-full hover:bg-gray-300"
            style={{ width: '36px', height: '36px' }} 
          >
            &times;
          </button>
          <nav className="mt-16 flex flex-col items-center justify-center"> 
            <ul className="space-y-4">
              <li>
                <button onClick={() => { navigate('/'); toggleDrawer(); }} className="text-primary p-2 text-xl hover:underline">
                  Calculator
                </button>
              </li>
              <li>
                <a 
                href='https://app.loanspq.com/xa/xpressApp.aspx?enc=Kw21Wblm1yxpjJabdoZaD9P5Ohrb21U42vf4mi4ehVOHesN2P5T0h5-U4tYLIGz1pbxW5gXLDq4i9XcbQAEpui6QgaQp7OmdIC4KX01JRaLYmxn24WPdjZkK9UMNSPC3'
                target="_blank"
                rel="noopener noreferrer"
                >
                  <button className="text-primary p-2 text-xl hover:underline">
                    Open Account
                  </button>
                </a>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="text-primary p-2 text-xl hover:underline">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </Transition>
  );
};

export default Menu;
