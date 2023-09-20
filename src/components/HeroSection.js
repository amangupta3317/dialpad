import React from "react";

function HeroSection() {
  return (
    <section className="bg-gradient-to-tl from-[#4895ef] to-[#10002b] via-[#5a189a] end-[#9d4edd] text-gray-900">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="rounded-2xl object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-0 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Your Calls on
          </h1>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Your Fingertips!
          </h1>
          <p className="mt-6 mb-8 font-semibold text-lg sm:mb-12">
            <span className="animate-pulse">
              Welcome to the future of communication with our groundbreaking
              website. We've harnessed the power of AI to transform your
              conversations, making them smarter, more intuitive, and incredibly
              efficient. Elevate your voice, connect effortlessly, and unlock a
              world of possibilities. Say hello to a new era in conversation!
            </span>
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <div className="flex flex-grow items-end">
              <button className=" inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-mediumtext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className=" px-5 py-2.5 text-white rounded-md group-hover:bg-opacity-100">
                  See Prices
                </span>
              </button>
              <button
                type="button"
                className=" ml-8 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              >
                <span className=" px-5 py-2.5 text-white rounded-md group-hover:bg-opacity-100">
                  More Info
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
