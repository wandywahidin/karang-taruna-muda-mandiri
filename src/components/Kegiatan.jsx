import React from "react";
import Card from "./Card";
import dataJson from "../data";

const Kegiatan = () => {
  return (
    <div name='kegiatan' className=" w-full min-h-screen bg-gradient-to-br from-gray-800 to-black text-gray-300 pt-8">
      <div className="pb-8 pl-4">
        <p className="md:text-4xl text-2xl font-bold inline border-b-4 border-blue-700">
          Kegiatan
        </p>
      </div>
      <div className="w-[95%] h-full grid md:grid-cols-3 gap-4 mx-auto">
        {dataJson.map((item) => {
          return (
            <div key={item.id}>
              <Card title={item.title} images={item.images} content={item.content} link={item.link} date={item.date}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Kegiatan;
