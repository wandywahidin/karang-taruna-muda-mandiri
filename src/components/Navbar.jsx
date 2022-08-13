import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [togle, setTogle] = useState(false);
  const handleTogle = () => {
    setTogle(!togle);
  };

  return (
    <div className="w-full fixed flex justify-between px-8 items-center text-gray-200 backdrop-filter backdrop-blur-lg p-3 z-10">
      {/* logo */}
      <div className=" cursor-pointer z-20">
        <Link to="home" smooth={true} duration={500} className='text-center' >
          <h1 className="text-base md:text-base text-gray-200 font-bold">Karang Taruna</h1>
          <h1 className=" text-3xl md:text-2xl text-blue-700 font-bold -mt-2">Muda Mandiri</h1>
          <h1 className="text-xs md:text-xs text-gray-200 font-bold -mt-1 ">Rw 06 Desa Sukasukur Cisayong Tasikmalaya</h1>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex md:gap-4 md:text-xl cursor-pointer">
        <li>
          <Link
            className=" hover:text-blue-700"
            to="home"
            smooth={true}
            duration={500}
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-blue-700"
            to="about"
            smooth={true}
            duration={500}
          >
            Tentang Kami
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-blue-700"
            to="kegiatan"
            smooth={true}
            duration={500}
          >
            Kegiatan
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-blue-700"
            to="galery"
            smooth={true}
            duration={500}
          >
            Galery
          </Link>
        </li>
        <li>
          <Link
            className=" hover:text-blue-700"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={() => handleTogle()} className="md:hidden z-10">
        {!togle ? <FaBars size={28} /> : <FaTimes size={28}  />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !togle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-black"
        }
      >
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-blue-700"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-blue-700"
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Tentang Kami
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-blue-700"
            to="kegiatan"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Kegiatan
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-blue-700"
            to="galery"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Galery
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link
            className=" hover:text-blue-700"
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleTogle()}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;