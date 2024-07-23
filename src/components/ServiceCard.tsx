// Card.tsx

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
interface CardProps {
    icon: string;
    title: string;
    content: string;
    readMoreLink: string;
    bgColor?: string;
    borderLine?: boolean;
}

const Card: React.FC<CardProps> = ({ icon, title, content, readMoreLink, bgColor, borderLine }) => {
    return (
        <div className={`${bgColor} shadow-md rounded-[16px] p-6 flex flex-col ${borderLine ? 'border-4 border-[#c0cd47]' : ''}`}>
            <div className="text-4xl mb-4">
                <img src={icon} alt="icon" className='w-20 h-20 object-contain rounded-full' />
            </div>
            <h2 className={`text-3xl font-extrabold mb-2 text-left ${borderLine ? 'text-black' : 'text-[#D6D1D1]'}`}>{title}</h2>
            <p className={` text-left font-bold mb-4 ${borderLine ? 'text-black' : 'text-[#D6D1D1]'}`}>{content}</p>
            <div className='flex space-x-2 items-center'>
                <a href={readMoreLink} className="text-[#ff7318]  text-left font-bold">READ MORE</a>
                <FaArrowRight className="text-xl text-[#ff7318] cursor-pointer" />
            </div>
        </div>
    );
};

export default Card;
