import React from "react";
import List_PricingCard2 from "./List_PricingCard2";

function PricingCard2() {
  return (
    <div className="flex flex-col p-6  mx-auto max-w-lg text-center  text-slate-400 bg-gradient-to-b from-[#3a0ca3] to-[#7209b7] end-[#4361ee] via-[#f72585] rounded-lg border border-black shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white">
      <h3 className="mb-4 text-3xl text-lime-500 font-bold">Company</h3>
      <p className="text-white font-semibold sm:text-lg dark:text-white">
        Relevant for multiple users,small company & extended premium support.
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-white text-5xl font-extrabold">₹1999</span>
        <span className="text-gray-300 font-semibold dark:text-gray-300">
          /month
        </span>
      </div>
      {/* List */}
      <List_PricingCard2></List_PricingCard2>
      <a
        href="#"
        className="text-white font-bold bg-slate-800 hover:bg-teal-900 focus:ring-4 focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Get started
      </a>
    </div>
  );
}

export default PricingCard2;
