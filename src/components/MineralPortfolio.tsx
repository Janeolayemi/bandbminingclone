// Card.tsx

import React from 'react';

interface CardProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    content: string;
    readMoreLink: string;
}

const MineralPortfolio: React.FC<CardProps> = ({ imageUrl, title, subtitle, content, readMoreLink }) => {
    return (
        <div className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 transition-opacity hover:bg-opacity-75">
                <div className="text-white">
                    <h2 className="text-xl font-bold mb-1 text-left text-[#ff7318]">{title}</h2>
                    <h3 className="text-lg font-bold">{subtitle}</h3>
                </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center p-4 opacity-0 transition-opacity hover:opacity-100 hover:bg-opacity-75">
                <div className="text-white text-center">
                    <p className="mb-4 text-left font-semibold">{content}</p>
                    <button className="bg-[#ff7318] text-center text-white px-4 py-4 mt-4 rounded-[30px] hover:opacity-90 font-bold focus:outline-none w-[10rem]">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MineralPortfolio;
