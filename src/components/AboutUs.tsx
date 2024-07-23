import React from 'react'

export default function AboutUs() {
    return (
        <div className='w-full h-full p-[3rem] flex items-center max-w-7xl mx-auto'>
            <div>
                <div className='border-b-4 border-[#c0cd47] p-4 '>
                    <span className='text-2xl text-[#c0cd47] mb-4 font-bold'>About Us</span>
                    <h1 className="text-[3rem] mb-0 font-extrabold">Forging Success  </h1>
                    <h1 className="text-[3rem] mb-2 font-extrabold">From Earth's Depths</h1>

                    <div className='border-l-4 border-red-500 p-4'>
                        <span className=''>
                            BILIJOE+BERGER MINING LTD is a premier mining company that specializes in the exploration, extraction, and processing of gold, Tourmaline, Beryllium, Lithium, Quartz and other valuable mineral resources. The company was established with a vision to harness the rich mineral wealth of Nigeria and has developed a reputation for operational excellence, environmental stewardship, and community engagement.
                        </span>
                    </div>

                    <div className='flex space-x-6 mt-10'>
                        <div>
                            <span className='underline text-xl text-[#de6415] font-bold'>
                                OUR MISSION
                            </span>

                            <p className='font-bold text-sm text-gray mt-5'>
                                Our mission is to sustainably develop and mine high quality mineral resources while creating value for our stakeholders and contributing positively to the economic growth of our host communities and Nigeria at large.
                            </p>
                        </div>

                        <div>
                            <span className='underline text-xl text-[#de6415] font-bold'>
                                OUR CORE VALUES
                            </span>

                            <p className='font-bold text-sm text-gray mt-5'>
                                We uphold integrity, sustainability, excellence, safety, and community engagement. The company prioritizes honesty, responsible mining practices, superior performance, and the wellbeing of employees and communities, fostering a culture of trust, innovation, and mutual benefit.
                                These values guide its actions and decisions.
                            </p>
                        </div>
                    </div>
                </div>

                <button className="bg-[#000000] text-white px-4 py-4 mt-4 rounded-[12px] hover:opacity-90 font-bold focus:outline-none w-[10rem]">
                    READ MORE
                </button>
            </div>

            <div>
                <div className='w-[40rem] h-[28rem] bg-[#c0cd47] text-white mt-[10px] p-4 rounded-[18px] '>
                    <img src='https://bandbmining.com/wp-content/uploads/2024/07/with-yellow-headphones-on-neck-construction-worke-2023-11-27-05-15-20-utc-768x512.jpg' className='rounded-[18px] mt-[-50px] ml-[30px] w-[40rem] h-[28rem]' />
                </div>
            </div>
        </div>
    )
}
