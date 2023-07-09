import React from "react";

const Zingme1 = () => {
  return (
    <div className="">
      <div className="text-3xl bg-blue-400 py-5 mb-10">
        <h1>Zingid</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[400px] text-[20px]">
          <p>Chỉ với một tài khoản Zing ID,</p>
          <p>sử dụng được cho các game của VNG.</p>
          <button className="text-white bg-blue-400 px-5 py-2 mt-5 mb-7 ml-3 rounded-md hover:bg-blue-300 transition-all">
            Đăng ký tài khoản{" "}
          </button>
          <h1 className="mt-3">Hoặc đăng nhập với tài khoản khác</h1>
          <button className="bg-blue-400 hover:bg-blue-300 mt-2 mr-12 ml-3 px-3 py-2 rounded-2xl transition-all">facebook</button>
          <button className="bg-red-400 hover:bg-red-300 mt-2 px-3 py-2 rounded-2xl transition-all">google</button>
        </div>
        <div className="w-[400px] bg-gray-200 px-5 py-3">
          <h1 className="text-2xl mb-3">ĐĂNG NHẬP</h1>
          <input
            className="w-full px-5 py-2 text-[20px] mb-5"
            placeholder="Tên, email hoặc số điện thoại"
          ></input>
          <input
            className="w-full px-5 py-2 text-[20px]"
            placeholder="Mật khẩu"
          ></input>
          <a href="#" className="text-blue-400 flex flex-col justify-center items-center text-[15px] mt-2">
            Quên mật khẩu?
          </a>
          <button className="bg-green-400 w-full mt-3 flex flex-col justify-center items-center  px-4 py-2 text-[20px] text-white hover:bg-green-300 transition-all">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Zingme1;
