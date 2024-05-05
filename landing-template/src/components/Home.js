import React from "react";

const Home = () => {
  return (
    <div className="w-100 h-[80vh] bg-[#222222] flex items-center justify-center text-white bg-top bg-no-repeat bg-auto bg-[url('https://web-assets.ifttt.com/packs/media/prosumer/home-hero-a2644b8d67b6842e1bbf.svg')]">
      <div className="h-100 w-[60%] flex items-center justify-center flex-col gap-8 text-white">
        <h1 className="text-8xl font-extrabold">
          Automation for business and home
        </h1>
        <span className="text-2xl font-bold">Save time and get more done</span>
        <button className='px-20 py-8 bg-white rounded-full text-black text-4xl font-bold leading-relaxed'>Start today</button>
      </div>
    </div>
  );
};

export default Home;
