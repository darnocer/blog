import React from 'react';
import Lottie from "lottie-react";
import Animation from '@/data/lottie/status-indicator.json';

const Status = ({ text }) => {
  return (
    <div
      className="mr-6 btn inline-flex items-center justify-center gap-2 rounded-xl px-4 py-1
                 border border-gray-700 dark:border-gray-300/20
                 bg-gray-800 dark:bg-black
                 text-sm font-semibold text-gray-100 dark:text-gray-100
                 transition-all 
                 shadow-lg hover:pointer hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:no-underline"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <Lottie animationData={Animation} loop autoplay className="w-full h-full" />
      </div>
      <span className="mt-1 text-sm font-sans uppercase font-semibold text-gray-100">
        {text}
      </span>
    </div>
  );
};

export default Status;