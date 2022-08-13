import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full  bg-gradient-to-br from-gray-800 to-black text-gray-300 shadow-lg pt-8"
    >
      <div className="">
        <div className="pb-8 pl-4">
          <p className="md:text-4xl text-2xl font-bold inline border-b-4 border-blue-700">
            Kontak Kami
          </p>
        </div>
        <form className="text-white flex flex-col p-5 md:w-[50%] mx-auto">
          <label className="pb-1" htmlFor="name">
            Nama
          </label>
          <input className="mb-2 py-1 px-2 rounded" type="text" id="name" />
          <label className="pb-1" htmlFor="email">
            Email
          </label>
          <input className="mb-2 py-1 px-2 rounded" type="email" id="email" />
          <label className="pb-1" htmlFor="pesan">
            Pesan
          </label>
          <textarea
            className="mb-2 py-1 px-2 rounded"
            id="pesan"
            cols="30"
            rows="7"
          ></textarea>
          <a
            href='#'
            rel="noopener noreferrer"
            target="_blank"
            className="relative inline-flex items-center justify-center px-2 py-2 text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md group mx-6 my-4"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-blue-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative text-blue-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              Kirim
            </span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
