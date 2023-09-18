import React from "react";
import List_PricingCard1 from "./List_PricingCard1";

function PricingCard1() {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-slate-400 bg-gradient-to-b from-[#54478c] to-[#0db39e] to-[#16db93] rounded-lg border border-black shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white">
      <h3 className="mb-4 text-deep-purple-900  text-3xl font-semibold">
        Starter
      </h3>
      <p className=" font-semibold text-white sm:text-lg dark:text-white-400">
        Best option for personal use & for your next project.
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold text-white">FREE</span>
        <span className="text-gray-300 font-semibold dark:text-gray-300">
          for a month
        </span>
      </div>
      {/* List */}
      <List_PricingCard1></List_PricingCard1>
      <a
        href="#"
        className="text-white font-bold bg-slate-800 hover:bg-teal-900 focus:ring-4 focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Get started
      </a>
    </div>
  );
}

export default PricingCard1;
