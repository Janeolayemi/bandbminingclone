import React from 'react'
import Card from './ServiceCard';

const cardsData = [
    { icon: 'https://bandbmining.com/wp-content/uploads/2024/07/Conventional-Mining.png', title: 'Exploration', content: 'We conduct comprehensive geological surveys and explorations to identify and assess new mining sites, utilizing cutting-edge technology…', readMoreLink: '#', bgColor: 'bg-gradient-to-r from-[#053432] to-[#c0cd47]' },
    { icon: 'https://bandbmining.com/wp-content/uploads/2024/07/Contunuos-Mining.png', title: 'Extraction', content: 'We employ advanced mining techniques and technology to extract gold and other minerals in an efficient and sustainable manner…', readMoreLink: '#', bgColor: 'bg-[#f5f5f5]', borderLine: true },
    { icon: 'https://bandbmining.com/wp-content/uploads/2024/07/Coal.png', title: 'Processing', content: 'We utilize state-of-the-art processing facilities to refine and process minerals to market-ready standards, leveraging advanced technology…', readMoreLink: '#', bgColor: 'bg-gradient-to-r from-[#053432] to-[#c0cd47]' },
    { icon: 'https://bandbmining.com/wp-content/uploads/2024/07/Mining.png', title: 'Consulting', content: 'We offer expert consulting services to share its expertise and knowledge with the industry, providing guidance on mining best practices…', readMoreLink: '#', bgColor: 'bg-[#f5f5f5]', borderLine: true },
    { icon: 'https://bandbmining.com/wp-content/uploads/2024/07/Mining-Exploration.png', title: 'Man Power Supply', content: 'We boast a highly skilled and dedicated team of engineers, geologists, technicians, and support staff, all trained to the highest industry standards…', readMoreLink: '#', bgColor: 'bg-gradient-to-r from-[#053432] to-[#c0cd47]' },
    { icon: 'https://bandbmining.com/wp-content/uploads/2024/07/Product.png', title: 'Reclamation And Rehabilitation', content: 'We are committed to responsible mining practices, prioritizing environmental stewardship and social responsibility…', readMoreLink: '#', bgColor: 'bg-[#f5f5f5]', borderLine: true },
];
export default function Services() {
    return (
        <div className='w-full mt-10 p-10'>
            <div className='text-center'>
                <h1 className='text-3xl text-[#c0cd47] font-bold'>Services</h1>
                <h1 className='font-extrabold text-4xl mt-6'>Tailored Mining Services</h1>
                <h1 className='font-extrabold text-4xl my-4'> For Every Venture</h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-[15rem]">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            content={card.content}
                            readMoreLink={card.readMoreLink}
                            bgColor={card.bgColor}
                            borderLine={card.borderLine}
                        />
                    ))}


                </div>

                <button className="bg-[#000000] text-center text-white px-4 py-4 mt-4 rounded-[12px] hover:opacity-90 font-bold focus:outline-none w-[10rem]">
                    READ MORE
                </button>


            </div>
        </div>
    )
}
