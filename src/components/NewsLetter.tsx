import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

export default function NewsLetter() {
    return (
        <div className='bg-[#151515] w-full h-full p-10 flex space-x-10 justify-center'>
            <div className='flex items-center space-x-4'>
                <FaEnvelope className='text-5xl text-[#FFFFFF]' />
                <h1 className='text-3xl text-[#FFFFFF] font-bold'>Sign Up To Get Latest Updates</h1>
            </div>

            <div className='flex '>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-4 border focus:outline-none bg-gray-100"
                    placeholder='Your Name'
                />

                <button className="bg-[#010e0d] text-center text-white px-4 py-4 hover:bg-[#c0cd47] font-bold focus:outline-none w-full">
                    SUBSCRIBE
                </button>
            </div>
        </div>
    )
}
