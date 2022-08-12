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
          <button className="border font-semibold text-white bg-blue-700 rounded shadow-lg shadow-blue-700/50 border-gray-300 px-5 py-2 hover:bg-blue-500 w-[50%] mx-auto mt-2 ">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
