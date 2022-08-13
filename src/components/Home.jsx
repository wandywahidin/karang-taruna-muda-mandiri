import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      <div className="w-full h-full ">
        <div className="w-full h-full absolute bg-gradient-to-r from-black pl-4">
          <div className="flex flex-col justify-center md:items-start md:px-6 items-center w-full h-screen">
            <h1 className="text-white text-3xl md:text-5xl font-bold my-5">
              PEMUDA MEMBANGUN DESA
            </h1>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              Tekad insan generasi muda Indonesia untuk menjadi patriot atau
              pejuang yang berkepribadian, berpengetahuan, Serta menunjukkan
              sikap terampil dan selalu berkarya nyata agar mampu ikut secara
              aktif dalam pembangunan untuk menciptakan masyarakat yang adil dan
              makmur berdasarkan Pancasila.
            </p>
            <div className="my-4">
              <Link to='kegiatan'
                className="relative inline-flex items-center justify-center px-10 py-2 font-bold text-xl tracking-tighter text-white bg-gray-800 rounded-md group mx-6 my-4"
              >
                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-blue-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                <span className="relative text-blue-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                  Explore
                </span>
              </Link>
            </div>
          </div>
        </div>
        <img
          src={"/assets/bg.jpg"}
          alt="bg"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
