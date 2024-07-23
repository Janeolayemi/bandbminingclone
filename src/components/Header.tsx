// Header.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="w-full  shadow-md pb-4 bg-[#010e0d] text-white ">
            <div className="flex justify-between items-center mb-4 max-w-6xl mx-auto">
                <div className="flex justify-between items-center bg-[#151515] text-white p-4 w-full border-b border-white">
                    <span className="text-lg mr-4">Digging Dreams, Building Futures</span>
                    <div className="flex space-x-3">
                        <FaFacebook className="text-xl text-blue-600 cursor-pointer" />
                        <FaTwitter className="text-xl text-blue-400 cursor-pointer" />
                        <FaInstagram className="text-xl text-pink-600 cursor-pointer" />
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-4 border border-gray-300 focus:outline-none"
                    />
                    <button className="bg-[#c0cd47] text-white px-6 py-5 rounded-r-md hover:bg-blue-600 focus:outline-none">
                        <svg width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zm-5.442.659a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="text-2xl font-bold">
                    <img src='https://bandbmining.com/wp-content/uploads/2024/07/cropped-Mining-Logo-Light.png' alt="logo" className="w-60" />
                </div>
                <nav className="flex space-x-6">
                    <div className="cursor-pointer hover:text-[#c0cd47]">Home</div>
                    <div className="cursor-pointer hover:text-[#c0cd47]">About Us</div>
                    <div className="cursor-pointer hover:text-[#c0cd47]">Minerals</div>
                    <div className="cursor-pointer hover:text-[#c0cd47]">Service</div>
                    <div className="cursor-pointer hover:text-[#c0cd47]">Contact Us</div>
                </nav>

                <div className='flex space-x-3'>
                    <div className='rounded-full bg-[#c0cd47] p-3'>
                        <FaPhone className="text-xl text-white cursor-pointer" />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-sm font-bold'>Have anything to ask ?</span>
                        <span className='text-sm font-bold'>+234 803 470 2034</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
