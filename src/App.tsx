import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { FaAddressBook, FaPhone, FaPhoneVolume } from 'react-icons/fa';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import MineralPortfolio from './components/MineralPortfolio';
import ContactUs from './components/ContactUs';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';


const cardsData = [
  {
    imageUrl: 'https://bandbmining.com/wp-content/uploads/2024/07/gold.jpg',
    title: 'Gold (Au)',
    subtitle: 'A Treasure Trove Of Opportunities',
    content: 'We are poised to unearth the vast gold reserves in Nigeria, leveraging our expertise and state-of-the-art technology to extract this highly valued precious metal.',
    readMoreLink: '#'
  },
  {
    imageUrl: 'https://bandbmining.com/wp-content/uploads/2024/07/berry.jpg',
    title: 'Berrylium (Be)',
    subtitle: 'Strengthening Our Presence In High-Tech Markets',
    content: 'We are poised to leverage the exceptional strength-toweight ratio of beryllium, catering to the demanding requirements of aerospace, defense, and energy industries.',
    readMoreLink: '#'
  },
  {
    imageUrl: 'https://bandbmining.com/wp-content/uploads/2024/07/lith.png',
    title: 'Lithium (Li)',
    subtitle: 'Powering The Future Of Clean Energy',
    content: 'Leading the renewable energy shift, focusing on lithium extraction for advanced batteries, supporting electric vehicles, and sustainable energy with responsible practices.',
    readMoreLink: '#'
  },
  {
    imageUrl: 'https://bandbmining.com/wp-content/uploads/2024/07/quartz.png',
    title: 'Quartz',
    subtitle: 'International Joint Venture For Rare Earth Elements',
    content: 'We rely on quartz, one of the most abundant and versatile minerals, to provide a solid foundation for our operations.',
    readMoreLink: '#'
  },
];


function App() {
  return (
    <div>
      <Header />
      <div
        className="w-full h-[calc(100vh-144px)] bg-cover bg-center flex flex-col text-white p-4  justify-center"
        style={{ backgroundImage: 'url(https://bandbmining.com/wp-content/uploads/2024/07/germany-north-rhine-westphalia-juechen-garzweil-2023-11-27-04-56-58-utc.jpg)' }}
      >
        <div className='mx-[5rem]'>
          <span className="text-xl mb-4 text-[#c0cd47] font-200">EXCAVATING EXCELLENCE</span>
          <h1 className="text-[3rem]  mb-2 font-extrabold">Your Home For</h1>
          <h1 className="text-[3rem]  mb-2 font-extrabold">Unearthed</h1>
          <h1 className="text-[3rem] mb-2 font-extrabold">Opportunities</h1>

          <div className='flex flex-col'>
            <span className=' w-[25rem] text-[16px] mb-4'>Unlocking Earth’s Hidden Treasures: Driving Sustainable Mining Innovations for a Brighter,<br /> Greener Future with Unmatched Excellence and Integrity</span>

            <button className="bg-gradient-to-r to-[#053432] from-[#c0cd47] text-white px-4 py-4 mt-4 rounded-full hover:opacity-90 font-bold focus:outline-none w-[12rem]">
              GET STARTED
            </button>
          </div>
        </div>

      </div>

      <div className="w-full h-[20rem] bg-gradient-to-r from-[#c0cd47] to-[#000000] text-white px-4 py-4 mt-4 flex  items-center justify-center">
        <div className='bg-[#151515] text-white p-10 w-full rounded-[18px] flex items-center justify-between'>
          <div className='flex items-center'>
            <FaPhoneVolume className="text-6xl text-[#de6415] cursor-pointer" />
            <div className='flex flex-col ml-4'>
              <span className='text-2xl text-[#c0cd47] mb-4 font-extrabold'>Quick Contact</span>
              <span className='text-md text-white mb-3 font-bold'>Phone : +234 803 470 2034</span>
              <span className='text-md text-white  mb-3 font-bold' >Email : info@bandbmining.com</span>
            </div>
          </div>

          <div className='flex items-center'>
            <FaAddressBook className="text-6xl text-[#de6415] cursor-pointer" />
            <div className='flex flex-col ml-4'>
              <span className='text-2xl text-[#c0cd47] mb-4 font-extrabold'>Quick Contact</span>
              <span className='text-md text-white mb-3 font-bold'>No 11, Jere Street, Off</span>
              <span className='text-md text-white  mb-3 font-bold' >Funmilayo Ransom Kuti Road, Garki 11, FCT Abuja.</span>
            </div>
          </div>

          <div className='w-[40rem] h-[25rem] bg-gradient-to-t to-[#c27b38] from-[#9aa342] text-white mt-[-250px] p-4 rounded-[18px] '>
            <h1 className="text-[3rem] mb-0 font-extrabold">Certified Mining </h1>
            <h1 className="text-[3rem] mb-2 font-extrabold">Company & Industry</h1>
            <span>Uncovering Tomorrow’s Resources Today</span>
          </div>
        </div>


      </div>

      <AboutUs />

      <div className='w-[100%] p-10 bg-[#e9e9e9]'>
        <div className='flex bg-white w-full h-[40rem]'>
          <img src="https://bandbmining.com/wp-content/uploads/2024/07/Incredibly.png" alt="" className='w-[60rem] h-[40rem]' />

          <div>
            <div className='flex flex-col p-10'>
              <span className="text-[3rem] font-extrabold">From Roots To Riches,
              </span>
              <span className="text-[3rem] font-extrabold">Unveiling Our Mining</span>
              <span className="text-[3rem] font-extrabold">Odyssey</span>
              <span className='text-[16px] font-bold text-gray-500 w-[40rem]'>Transforming the mining landscape with innovative solutions, sustainable practices, and a commitment to excellence. Unlocking the potential of Earth’s resources responsibly for a brighter, greener future.</span>


              <div className="w-full py-2 mt-4">

                <div className='flex justify-between'>
                  <span className="text-lg font-extrabold mb-2 block">Work Satisfaction</span>
                  <span className="text-sm text-gray-600 mt-1 block">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div className="bg-[#c0cd47] h-full rounded-full" style={{ width: '95%' }}></div>
                </div>

              </div>

              <div className="w-full py-2">
                <div className='flex justify-between'>
                  <span className="text-lg font-extrabold mb-2 block">Work Progress</span>
                  <span className="text-sm text-gray-600 mt-1 block">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div className="bg-[#c0cd47] h-full rounded-full" style={{ width: '90%' }}></div>
                </div>

              </div>
            </div>
          </div>

          <div className='w-[8rem] h-[40rem] bg-[#c0cd47]'></div>
          <div className='w-[1rem] h-[40rem] bg-white'></div>

        </div>
      </div>

      <Services />

      <div className='w-full mt-10 p-10 bg-[#E9E9E9]'>
        <div className='text-center mt-10'>
          <h1 className='text-3xl text-[#c0cd47] font-bold'>MINERALS PORTFOLIO</h1>
          <h1 className='font-extrabold text-4xl mt-6'>Prospecting Progress, </h1>
          <h1 className='font-extrabold text-4xl my-4'> Planting Prosperity</h1>


          <div className="flex flex-col items-center justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl px-4">
              {cardsData.map((card, index) => (
                <MineralPortfolio
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  subtitle={card.subtitle}
                  content={card.content}
                  readMoreLink={card.readMoreLink}
                />
              ))}
            </div>
            <button className="bg-[#000000] text-center text-white px-4 py-4 mt-4 rounded-[12px] hover:opacity-90 font-bold focus:outline-none w-[10rem]">
              READ MORE
            </button>
          </div>

        </div>
      </div>

      <ContactUs />
      <NewsLetter />
      <Footer />
      <div className='w-full bg-[#151515] text-white p-4'>
        <p className='text-center text-sm font-bold'>Copyright © 2024 BILIJOE+BERGER MINING LTD. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
