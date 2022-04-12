import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';


const ConnectWidget = () => {
  return (
    <div className="bg-white p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-t pb-4">Connect with Slimer</h3>
        <div className="flex text-4xl text-black">
          <a href="https://www.facebook.com/" className="w-full p-2 px-5"><FaFacebook /></a>
           <a href={`https://www.facebook.com/`} className="w-full p-2 px-5"><FaInstagram /></a>
           <a href={`https://www.facebook.com/`} className="w-full p-2 px-5"><FaTwitter /></a>
           <a href={`https://www.facebook.com/`} className="w-full p-2 px-5"><FaPinterest /></a>
        
          </div>
   </div>
  );
};

export default ConnectWidget;
