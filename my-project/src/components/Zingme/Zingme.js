import React from "react";

const Zingme = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-blue-400 py-5 w-full mb-10 text-3xl">
        <h3>Zingid</h3>
      </div>
      <div className="w-[400px] flex flex-col p-5 gap-5 bg-gray-200 ">
        <h4 className="text-[30px]">ĐĂNG NHẬP</h4>
        <input
          className="w-full py-3 px-5"
          placeholder="Tên, email hoặc số điện thoại"
        ></input>
        <input className="w-full py-3 px-5" placeholder="Mật khẩu"></input>
        <div className="flex flex-col justify-center items-center">
          <a href="#" className="text-blue-500 text-[15px] mb-3">
            {" "}
            Quên mật khẩu?
          </a>
          <button className="bg-green-500 text-white w-full  py-2 text-[20px] hover:bg-green-400 transition-all">
            Đăng nhập
          </button>
        </div>
      </div>
      <div className="text-center w-[500px] text-xl mt-5 mb-3">
        <p>Chỉ với một tài khoản Zing ID, </p>
        <p> sử dụng được cho các game của VNG.</p>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-6 py-3 text-[20px] hover:bg-blue-400 mb-10 transition-all">
          Đăng ký tài khoản
        </button>
      </div>
      <div>
        <p className="text-[20px] text-bor">
          Hoặc đăng nhập với tài khoản khác
        </p>
        <div>
          <button className="bg-blue-400 px-5 py-2 text-white text-[20px] hover:bg-blue-300 rounded-2xl mr-12 ml-2 transition-all">facebook</button>
          <button className="bg-red-400 px-5 py-2 text-white text-[20px] hover:bg-red-300 rounded-2xl transition-all">google</button>
        </div>
      </div>
    </div>
  );
};

export default Zingme;
