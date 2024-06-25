import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      {/* <nav className="bg-transparent p-4"> */}
        <div className="flex flex-row w-full max-w-full min-w-full h-auto justify-center items-center bg-transparent p-4 text-white font-extrabold text-3xl text-center tracking-wide">
      {/* <nav> */}
          {/* <div className="text-white font-extrabold text-3xl text-center tracking-wide"> */}
            HEART HEALTH PREDICTOR
          {/* </div> */}
      {/* </nav> */}
        </div>
    </>
  );
};

export default Navbar;


// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const Navbar = () => {
//   return (
//     <>
//       <nav className="bg-gray-800/0 p-4">
//         <div className="flex justify-between items-center">
//           <div className="text-white font-bold text-lg text-center">
//             Heart Health Predictor
//           </div>
//           {/* <div className="flex space-x-4">
//             <Link href='#' className="text-white hover:text-gray-400">Predictor</Link>
//             <Link href='#' className="text-white hover:text-gray-400">Random</Link>
//           </div> */}
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar
