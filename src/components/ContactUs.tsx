import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt, FaVoicemail } from 'react-icons/fa'

export default function ContactUs() {
    return (
        <div className='bg-white w-full h-full p-10 flex space-x-10 justify-center'>
            <div>
                <h1 className='text-3xl text-[#c0cd47]'>Contact Us</h1>
                <h1 className='font-extrabold text-4xl mt-6'>Get in touch with us</h1>
                <p className='font-semibold text-xl my-4 text-[#7A7A7A] w-3/4'>We are here to help you get started in the right direction with your project.</p>

                <div className='flex items-center space-x-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#012C29] hover:bg-[#c0cd47] p-4 w-[4rem] h-[4rem]'>
                        <FaPhoneAlt className='text-2xl text-[#FFFFFF] cursor-pointer' />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold text-[#c0cd47]'>Phone Number</span>
                        <span className='text-sm font-extrabold text-[#012C29]'>+234 803 470 2034</span>
                    </div>
                </div>

                <div className='flex items-center space-x-4 mt-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#012C29] hover:bg-[#c0cd47] p-4 w-[4rem] h-[4rem]'>
                        <FaEnvelope className='text-2xl text-[#FFFFFF] cursor-pointer' />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold text-[#c0cd47]'>Email</span>
                        <span className='text-sm font-extrabold text-[#012C29]'>info@bandbmining.com</span>
                    </div>
                </div>

                <div className='flex items-center space-x-4 mt-4'>
                    <div className='flex items-center justify-center rounded-full bg-[#012C29] hover:bg-[#c0cd47] p-4 w-[4rem] h-[4rem]'>
                        <FaLocationArrow className='text-2xl text-[#FFFFFF] cursor-pointer' />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold text-[#c0cd47]'>Location</span>
                        <span className='text-sm font-extrabold text-[#012C29] w-3/4'>No 11, Jere Street, Off Funmilayo Ransom Kuti Road Garki 11, FCT Abuja.</span>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-4xl text-[#ff7318] '>Fill The Form Below</h1>
                <form className="max-w-4xl mx-auto mt-8 bg-white ">
                    <div className="flex flex-wrap -mx-2 mb-4">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-4 border focus:outline-none bg-gray-100"
                                placeholder='Your Name'
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-4 border focus:outline-none  bg-gray-100"
                                placeholder='Your Email'
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-4 border focus:outline-none bg-gray-100"
                            placeholder='Your Subject'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-4 border focus:outline-none bg-gray-100 h-16"
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                    <button className="bg-[#ff7318] text-center text-white px-4 py-4 hover:opacity-90 font-bold focus:outline-none w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
