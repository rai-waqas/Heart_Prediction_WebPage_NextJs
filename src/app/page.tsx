// 'use client';
// import React, { useState } from 'react';
// import Navbar from '@/components/navbar';
// import PredictionModal from '@/components/modals/predictionModal';
// import Footer from '@/components/footer';
// import Image from 'next/image';

// const Home: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const scrollToNextDiv = () => {
//     const nextDiv = document.getElementById('nextDiv');
//     if (nextDiv) {
//       nextDiv.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     // <div className="relative w-full h-screen">
//     //   <div className="absolute inset-0 z-0">
//     //     {/* Background Image */}
//     //     <Image
//     //       src={require(`../../public/assets/images/Getty Images - heart health.jpg`)}
//     //       alt="Background Image"
//     //       layout="fill"
//     //       objectFit="cover"
//     //       priority={true}
//     //       className="opacity-80"
//     //     />
//     //   </div>
//     //   {/* Open modal button */}
//     //   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//     //     <button
//     //       onClick={scrollToNextDiv}
//     //       className="bg-teal-500 text-white text-lg py-3 px-6 rounded-full hover:bg-teal-600"
//     //     >
//     //       Let&apos;s get started
//     //     </button>
//     //   </div>
//     //   <div className="relative z-10">
//     //     <Navbar />

//     //     {/* Prediction modal */}
//     //     <PredictionModal isOpen={isModalOpen} onClose={closeModal} />

//     //     {/* <Footer /> */}
//     //   </div>
//     //   <div id="nextDiv" className="relative w-full h-screen flex items-center justify-center">
//     //     <div className="absolute inset-0 z-0">
//     //       {/* Background Image */}
//     //       <Image
//     //         src={require(`../../public/assets/images/Getty Images - heart health.jpg`)}
//     //         alt="Background Image"
//     //         layout="fill"
//     //         objectFit="cover"
//     //         priority={true}
//     //         className="opacity-80"
//     //       />
//     //     </div>
//     //     <div className="relative z-10">
//     //       <h1 className="text-white text-3xl">This is the next section</h1>
//     //     </div>
//     //   </div>
//     // </div>
//     <>
//       {/* <div id="mainPage"> */}
//       {/* <div id="mainPage"> */}
//       <div  className=" flex flex-row w-full max-w-full min-w-full h-auto">
         
//         <div id='mainPage' className=" flex flex-col w-full max-w-full min-w-full h-auto bg-pink-200" >
//           {/* sticky navbar */}
//           {/* <div className="flex flex-row w-full max-w-full min-w-full"> */}
//             <Navbar/>
//       </div>
//           {/* </div> */}
//           {/* <div className="flex flex-row w-full max-w-full min-w-full h-full overflow-hidden ">
//             <Image
//             src={require(`../../public/assets/images/Getty Images - heart health.jpg`)}
//             alt="backgroundImage"
          
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="w-full h-full"
//             />
//           </div> */}
//           <div className="flex flex-row w-full max-w-full min-w-full h-full bg-blue-900">
//             hghgh
//           </div>
//           <div className="flex flex-row w-full max-w-full min-w-full h-full bg-blue-900">
//             hghgh
//           </div>
//           <div className="flex flex-row w-full max-w-full min-w-full h-full bg-blue-900">
//             hghgh
//           </div>
//         </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default Home;
'use client';
import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import PredictionModal from '@/components/modals/predictionModal';
import Footer from '@/components/footer';
import Image from 'next/image';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <Image
          src={require(`../../public/assets/images/Getty Images - heart health.jpg`)}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="opacity-80"
        />
      </div>

      {/* Overlay to darken the background for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Open modal button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <button
          onClick={openModal}
          className="bg-teal-500 text-white text-2xl py-4 px-8 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
        >
          Let&apos;s get started
        </button>
      </div>
      
      <div className="relative z-10">
        <Navbar />

        {/* Prediction modal */}
        <PredictionModal isOpen={isModalOpen} onClose={closeModal} />

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;


// 'use client';
// import React, { useState } from 'react';
// import Navbar from '@/components/navbar';
// import PredictionModal from '@/components/modals/predictionModal';
// import Footer from '@/components/footer';
// import Image from 'next/image';

// const Home: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="relative w-full h-screen">
//       <div className="absolute inset-0 z-0">
//         {/* Background Image */}
//         <Image
//           src={require(`../../public/assets/images/Getty Images - heart health.jpg`)}
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority={true}
//           className="opacity-80"
//         />
//       </div>
//     {/* Open modal button */}
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <button
//             onClick={openModal}
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Let&apos;s get started
//           </button>
//         </div>

//       <div className="relative z-10">
//         <Navbar />

        

//         {/* Prediction modal */}
//         <PredictionModal isOpen={isModalOpen} onClose={closeModal} />

//         {/* <Footer /> */}
//       </div>
//     </div>
//   );
// };

// export default Home;




// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import PredictionDiv from "@/components/predictionDiv";
// import Image from "next/image";

// export default function Home() {
//   return (
//     // <h1>Main page</h1>
//     <>
//     <div className="flex flex-col w-full max-w-full h-auto">
//       <Navbar/>
//       <div className="flex flex-row w-full h-auto max-w-full min-w-full bg-blue-400 justify-center">
//           Display Image
//       </div>

//       <PredictionDiv/>
//       <Footer/>
//     </div>
//     </>
//   );
// }
