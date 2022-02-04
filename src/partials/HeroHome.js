import React, { useState } from 'react';
//import freelanceSvg from '../images/freelance.svg';
function HeroHome() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32">
        {/* Hero content */}
        <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto">
          {/* Left column */}
          <main className="relative lg:w-1/2 text-center max-w-lg mx-auto lg:max-w-none lg:text-left">
            <div className="sm:text-center lg:text-left">
              <h1 className="my-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline">Accounting Straight from</span>{' '}
                <span className="block text-green-950 xl:inline">your Inbox</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Find great talent. Build your business. Take your career to the next level.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <a className="btn text-white bg-blue-950 hover:bg-green-950 w-full mb-4 sm:w-auto sm:mb-0" href="/signup">Get start</a>
                </div>
               
              </div>
            </div>
          </main>
          {/* Right col */}
          <div class="w-full md:w-1/2 py-6 text-center">
            <img class="w-full md:w-4/5 z-50" src={require("../images/syn 1L.svg").default}
              alt="" />
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}

export default HeroHome;

