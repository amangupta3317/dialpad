import React from "react";
import List_PricingCard3 from "./List_PricingCard3";

function PricingCard3() {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-slate-400 bg-gradient-to-b from-[#E5383B] via-[#660708] to-[#161A1D] rounded-lg border  border-black shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white">
      <h3 className="mb-4 text-3xl text-sky-400 font-bold">Enterprise</h3>
      <p className="font-semibold text-white sm:text-lg dark:text-white">
        Perfect for a large scale company or an Enterprise for seemless calling
        solutions
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-white text-5xl font-extrabold">₹3999</span>
        <span className="text-gray-300 font-semibold dark:text-gray-300">
          /month
        </span>
      </div>
      {/* List */}
      <List_PricingCard3></List_PricingCard3>
      <a
        href="#"
        className="text-white font-bold bg-slate-800 hover:bg-teal-900 focus:ring-4 focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Get started
      </a>
    </div>
  );
}

export default PricingCard3;
