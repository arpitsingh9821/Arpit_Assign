import React from 'react';
import { FaGrinBeamSweat } from "react-icons/fa";
import './Loader.css';

function Loader() {
  return (
    <div className='h-full flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-brown1 z-30 '>
      <div className='flex gap-5 text-3xl font-semibold font-logo'>
        <h1 className='text-orange-400 a-animation'>A</h1>
        <h1 className='text-white mt-1 icon-animation'><FaGrinBeamSweat /></h1>
        <h1 className='text-green-400 s-animation'>S</h1>
      </div>
    </div>
  );
}

export default Loader;
