import React from 'react';

function HeroSection() {
  return (
    <section className="bg-green-100 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://source.unsplash.com/JKUTrJ4vK00"
            alt=""
            className="rounded-md object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-0 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Customise Your Call !
            {/* <span className="dark:text-violet-400">senectus</span>erat pharetra */}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
          Whether your team is in sales or support, having a contact center sentiment analysis feature in your platform is essential for helping managers and supervisors monitor active calls more easily (and jump in when needed). See how it works in Dialpad's AI-powered customer engagement platform by booking a product tour!
            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              See Prices..
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
