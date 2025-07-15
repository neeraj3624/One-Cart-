import React from "react";
import logo from "../assets/logo.png";
const Add2 = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex flex-col justify-start items-center gap-[10px] px-[30px]
      cursor-pointer"
      >
        <img src={logo} alt="" className="w-[40px] " />
        <span className="text-[25px] text-white">OneCart</span>
        <span className="text-[15px] text-white font-semibold">
          Welcome to OneCart, Apply to Admin Login
        </span>
      </div>
      <div className="w-[90%] h-600px] bg-black rounded border-[1px] rounded-2xl flex items-center justify-center">
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <div className="w-[90%] h-[400px] flex items-center gap-[10px] cursor-pointer">
            <input
              type="email"
              placeholder="Enter Email"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[100%] h-[50px] text-black bg-transparent "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add2;
