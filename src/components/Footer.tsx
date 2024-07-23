import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
    return (
        <div
            className="relative w-full h-[calc(100vh-354px)] flex flex-col text-white p-4 justify-center"
        >
            <div
                className="absolute inset-0 bg-black opacity-90"
                style={{ backgroundImage: 'url(https://bandbmining.com/wp-content/uploads/2024/07/a-large-machine-is-on-top-of-some-tracks-with-coal-2023-11-27-05-35-15-utc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>
            <div className="relative z-10 flex justify-between mx-auto space-x-20">
                <div>
                    <img src='https://bandbmining.com/wp-content/uploads/2024/07/cropped-Mining-Logo-Light.png' alt="logo" className="w-60" />
                    <p className='text-[16px] mt-6 mb-4 text-white w-[20rem] font-semibold'>
                        Unlocking Earth’s Hidden Treasures: Driving Sustainable Mining Innovations for a Brighter, Greener Future with Unmatched Excellence and Integrity.
                    </p>

                    <div className='flex space-x-4 mt-10'>
                        <FaPhoneAlt className="text-3xl text-[#de6415] cursor-pointer" />
                        <div className='flex flex-col'>
                            <span className='text-[20px] text-white font-semibold '>
                                TALK TO OUR SUPPORT
                            </span>
                            <span className='text-[18px] text-[#c0cd47] font-extrabold '>+234 803 470 2034</span>
                            <span className='text-[18px] text-[#c0cd47] font-extrabold '>info@bandbmining.com</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span  className='text-3xl text-white font-bold '>Services</span>

                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - EXPLORATION</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - EXTRACTION</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - PROCESSING</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - CONSULTING</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - MANPOWER AND EQUIPMENT</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - RECLAMATION AND REHABILITATION</span>
                </div>

                <div className='flex flex-col'>
                    <span  className='text-3xl text-white font-bold '>Quick Links</span>

                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - HOMEPAGE</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - ABOUT US</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - SERVICES</span>
                    <span className='text-[16px] text-white hover:text-[#c0cd47] pointer cursor-pointer mt-4 '> - CONTACT US</span>
                    
                </div>
            </div>
        </div>

    )
}
