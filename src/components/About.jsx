import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full min-h-screen bg-gradient-to-tr from-gray-800 to-black text-gray-300 -pt-6">
      <div className="py-8 pl-4">
        <p className="md:text-4xl text-2xl font-bold inline border-b-4 border-blue-700">
          Tentang Kami
        </p>
      </div>
      <div className=" px-4">
        <div className="md:text-4xl text-2xl font-bold pb-4">
          <p>Karang Taruna</p>
        </div>
        <div className="md:w-[50%]">
          <p className=" text-justify">
            Berdasarkan Pasal 1 angka 14 Peraturan Menteri Dalam Negeri No. 5
            Tahun 2007 tentang Pedoman Penataan Lembaga Kemasyarakatan
            ("Permendagri 5/2007), karang taruna adalah lembaga kemasyarakatan
            yang menjadi wadah pengembangan generasi muda, yang tumbuh dan
            berkembang atas dasar kesadaran dan rasa tanggung jawab sosial dari,
            oleh, dan untuk masyarakat, terutama generasi muda di wilayah
            desa/kelurahan atau komunitas adat sederajat. Karang taruna berangggotakan pemuda dan pemudi (dalam AD/ART-nya diatur keanggotaanya, mulai dari pemuda dan pemudi berusia mulai dari 11–40 tahun) dan batas sebagai pengurus adalah berusia 17–35 tahun.
          </p>
        </div>
        <div className="md:text-4xl text-2xl font-bold py-4">
          <p>Struktur Organisasi</p>
        </div>
        <div className="flex flex-col gap-2 md:w-[50%] pb-8">
          <div className=" grid grid-cols-7">
            <p className=" col-span-3">Pelindung</p>
            <p>:</p>
            <p className=" col-span-3">Bapak Herlan, SH.</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Penasihat</p>
            <p>:</p>
            <p className="col-span-3"> Bapak Harun</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Pembimbing</p>
            <p>:</p>
            <p className="col-span-3">Ibu Lia Julianti</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Ketua</p>
            <p>:</p>
            <p className="col-span-3">Defandi Aji</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Wakil Ketua</p>
            <p>:</p>
            <p className="col-span-3">Niki Andiyanti</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Sekretaris</p>
            <p>:</p>
            <p className="col-span-3">Faizal Indra Raharja</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Wakil Sekretaris</p>
            <p>:</p>
            <p className="col-span-3">Widiya Nursanti</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Bendahara</p>
            <p>:</p>
            <p className="col-span-3">Silvy Fitrianingsih</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Wakil Bendahara</p>
            <p>:</p>
            <p className="col-span-3">Fitri Susilawati</p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Publikasi Dekorasi Dokumentasi</p>
            <p>:</p>
            <p className="col-span-3 flex flex-col">
              <span>- Wahyudin</span> <span>- Suteja</span>{" "}
            </p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Hubungan Masyarakat</p>
            <p>:</p>
            <p className="col-span-3 flex flex-col">
              <span>- Dadi Supriyadi</span> <span>- M.Aidil Farizqy</span>{" "}
              <span>- Rifandi Kurniawan</span>
            </p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Keamanan</p>
            <p>:</p>
            <p className="col-span-3 flex flex-col">
              <span>- Sulaeman Nugraha</span> <span>- Wandi Hermawan</span>
              <span>- Ardiansyah</span>{" "}
            </p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Kerohanian</p>
            <p>:</p>
            <p className="col-span-3 flex flex-col">
              <span>- Gustira Nugraha </span> <span>- Saepudin.B</span>{" "}
              <span>- Gani Faujanuari</span>
            </p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Kesenian</p>
            <p>:</p>
            <p className="col-span-3  flex flex-col">
              <span>- Alfiansyah</span>
              <span>- Angga Junaidi</span>
            </p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Olahraga</p>
            <p>:</p>
            <p className="col-span-3  flex flex-col">
              <span>- Ryan Fajar</span>
              <span>- Tri Andi</span>
              <span>- Abdul Aziz</span>
            </p>
          </div>
          <div className=" grid grid-cols-7">
            <p className="col-span-3">Pendidikan</p>
            <p>:</p>
            <p className="col-span-3  flex flex-col">
              <span>- Irpan Herdianto </span>
              <span>- Iyan Sopyan </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
