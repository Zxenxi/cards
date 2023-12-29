import React from "react";
import Img from "../assets/hello.jpg";

export const Home = () => {
  return (
    <div className="container mx-auto  h-screen">
      <div className="w-96 m-11 relative ">
        <img src={Img} alt="" className="object-cover rounded-lg" />
        <div className="flex flex-col p-8 absolute top-0">
          <h1 className="bg-slate-100 w-fit px-2 rounded-full tracking-tighter font-bold">
            Subscribe
          </h1>
          <h1 className="text-xl mt-12 font-semibold tracking-tight bg-neutral-300 bg-opacity-55 py-3 px-2">
            Web Design Te
            <span className="text-white">mplate</span> <br />
            And Action Nee
            <span className="text-white">ded!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
