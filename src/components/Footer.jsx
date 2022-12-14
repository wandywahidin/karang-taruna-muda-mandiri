import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      name="galery"
      className="w-full h-full bg-gradient-to-tr from-gray-800 to-black text-gray-300 shadow-lg pt-8"
    >
      <div className="w-full h-full pb-4">
        <div className="text-white text-center">
          <h1 className="text-xl">Sekretariat</h1>
          <p className="text-xs">
            Madrasah Al-Hikmah, Kp. Sindangreret, Rt/Rw 01/06, Desa Sukasukur,
            Kecamatan Cisayong, Tasikmalaya
          </p>
        </div>
        <div className="flex justify-center">
          <a
            className="hover:text-white hover:scale-110"
            href="https://www.instagram.com/muda_mandiri06/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="mx-2 mt-3 " fill="white" size={24} />
          </a>
          <a
            className="hover:text-white hover:scale-110"
            href="https://www.instagram.com/muda_mandiri06/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook className="mx-2 mt-3 " fill="white" size={24} />
          </a>
          <a
            className="hover:text-white hover:scale-110"
            href="https://www.instagram.com/muda_mandiri06/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaWhatsapp className="mx-2 mt-3 " fill="white" size={24} />
          </a>
        </div>
        <div className="text-center text-gray-400 mx-auto mt-4">
          <p className="text-xs">Copyright &copy; 2022 </p>
          <p className="text-xs">
            Karang Taruna Muda Mandiri. All Right Reserved{" "}
          </p>
          <p className="text-xs">
            Design By{" "}
            <span>
              <a
                className="text-white hover:scale-110"
                href="https://www.instagram.com/wandywahidin/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Wandy
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
