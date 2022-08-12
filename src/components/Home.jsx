import React from "react";

const Home = () => {
  return (
    <div name='home' className="w-full h-screen">
      <div className="w-full h-full">
        <div className="w-full h-full absolute bg-gradient-to-r from-black">
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
              <button className="border font-semibold text-white bg-blue-700 rounded shadow-lg shadow-blue-700/50 border-gray-300 px-5 py-2 hover:bg-blue-500">
                Explore
              </button>
            </div>
          </div>
        </div>
        <img src={'/assets/bg.jpg'} alt="bg" className="w-full h-screen object-cover" />
      </div>
    </div>
  );
};

export default Home;
