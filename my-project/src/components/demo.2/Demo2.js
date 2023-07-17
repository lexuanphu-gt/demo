import React, { useEffect, useState } from "react";

const Demo2 = () => {
  const [value, setValue] = useState("false");

  // useEffect(() => {
  //   setValue("true");
  // }, [setValue]);

  console.log(value);

  return (
    <div className="flex  justify-center items-center h-[100vh] bg-gray-300">
      <div className="flex flex-col  p-[30px] w-[400px] justify-center items-center bg-gray-200 shadow-lg shadow-blue-500/50 border rounded-[10px]">
        <div className="flex justify-between w-full">
          <button>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button>
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
        <div className=" rounded-full bg-white">
          <img
            className="h-[100px] w-[100px] rounded-full m-3 object-cover"
            src="https://vapa.vn/wp-content/uploads/2022/12/hinh-nen-dep-full-hd-001.jpg"
            alt=""
          ></img>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="font-semibold text-2xl mt-3">CodingNepal</h1>
          <p className="text-[18px] mt-3 mb-3 font-light">{value}</p>
        </div>
        <div className="flex justify-between w-[200px] gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=100083963315473"
            className="fb w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-50 transition-all"
          >
            <i className="fab fa-facebook-f text-blue-800"></i>
          </a>
          <a
            href="#"
            className="twitter w-[40px] h-[40px] rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-50 transition-all"
          >
            <i className="fab fa-twitter text-blue-500"></i>
          </a>
          <a
            href="#"
            className="insta rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100 hover:bg-gray-50 transition-all"
          >
            <i className="fab fa-instagram text-red-400"></i>
          </a>
          <a
            href="https://www.youtube.com/watch?v=zBmTt5IeZNI"
            className="yt w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-50 transition-all"
          >
            <i className="fab fa-youtube text-red-600"></i>
          </a>
        </div>
        <div className=" mt-5">
          <button onClick={()=> {
              setValue(!value);
          }} className="mr-5 shadow-lg bg-gray-100 px-9 py-3 hover:bg-gray-50 transition-all">
            Message
          </button>
          <button className="ml-5 shadow-lg bg-gray-100 px-9 py-3">
            Following
          </button>
        </div>
        <div className="flex  mt-7 w-[340px] ">
          <div className="border-r pl-8 border-gray-300 w-[120px] ">
            <button className="">
              <i className="far fa-heart"></i>
            </button>
            <button className=" absolute ">
              <i className="icon-2 fas fa-heart"></i>
            </button>
            <span>20.4k</span>
          </div>
          <div className="border-r pl-8 border-gray-300 w-[120px]">
            <i className="far fa-comment"></i>
            <i className="icon-2 fas fa-comment"></i>
            <span>14.3k</span>
          </div>
          <div className="w-[100px] pl-5">
            <i className="fas fa-share"></i>
            <span>12.8k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
