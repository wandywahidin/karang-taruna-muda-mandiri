import React from "react";

const Card = ({ title, images, link, content, date }) => {
  return (
    <div className="card border-2 border-white rounded grid grid-cols-2 shadow-lg">
      <div className="border border-white rounded m-3 col-span-2">
        <img src={images} alt="kegiatan 1" />
      </div>
      <h1 className=" col-span-2 text-xl font-bold mx-3">{title.toUpperCase()}</h1>
      <p className="col-span-2 text-sm mx-3">{date}</p>
      <p className=" col-span-2 text-sm mx-3 text-justify">{content}</p>
      <a
        href={link} rel="noopener noreferrer" target="_blank"
        className="relative inline-flex items-center justify-center px-2 py-2 text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md group mx-8 my-4"
      >
        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-blue-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
        <span className="relative text-blue-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
          Proposal
        </span>
      </a>
      <a
        href={link} rel="noopener noreferrer" target="_blank"
        className="relative inline-flex items-center justify-center px-2 py-2 text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md group mx-6 my-4"
      >
        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-blue-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
        <span className="relative text-blue-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
          Laporan Kegiatan
        </span>
      </a>
    </div>
  );
};

export default Card;
