// import React, { useState } from 'react';
// import freelanceSvg from '../images/freelance.svg';
// function HeroHome() {
//     return (
//         <section className="relative">

//             {/* Illustration behind hero content */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
//                 <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                         <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
//                             <stop stopColor="#FFF" offset="0%" />
//                             <stop stopColor="#EAEAEA" offset="77.402%" />
//                             <stop stopColor="#DFDFDF" offset="100%" />
//                         </linearGradient>
//                     </defs>
//                     <g fill="url(#illustration-01)" fillRule="evenodd">
//                         <circle cx="1232" cy="128" r="128" />
//                     </g>
//                 </svg>
//             </div>

//             <div className="max-w-6xl mx-auto px-4 sm:px-6">

//                 {/* Hero content */}
//                 <div class="pt-32">
//                     <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
//                         {/* Left col */}
//                         <div class="flex flex-col w-full md:w-1/2 justify-center items-start text-left">

//                             <h1 class="my-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
//                                 Quickly get your job done by <span className="block text-indigo-600 xl:inline"> Pointage</span> professionals
//                             </h1>
//                             <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                                 Find great talent. Build your business.
//                                 <p>Take your career to the next level.</p>
//                             </p>
//                             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
// <div>
//     <a className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full mb-4 sm:w-auto sm:mb-0" href="/signup">Find Talent</a>
// </div>
// <div>
//     <a className="btn text-indigo-700 bg-indigo-100 hover:bg-indigo-200 w-full sm:w-auto sm:ml-4" href="/signup">Find Work</a>
// </div>

//                             </div>
//                         </div>
//                         {/* Right col */}
//                         <div class="w-full md:w-1/2 py-6 text-center">
//                             <img class="w-full md:w-4/5 z-50" src={freelanceSvg}
//                                 alt="" />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default HeroHome;