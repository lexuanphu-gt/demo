import React from "react";

const Facebook1 = () => {
  return (
    <div className="flex justify-center items-center gap-16 mt-5">
      <div className="w-[350px] text-[20px] mt-10">
        <div className="">
          <img
            className="w-[200px]"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="#"
          />
        </div>
        <p className="pl-5">
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center w-[400px] px-5 py-3 bg-gray-200 mt-10">
          <input
            className="w-full px-5 py-3 mb-2"
            placeholder="Email hoặc số điện thoại"
          />
          <input className="w-full px-5 py-3 mb-3" placeholder="Mật khẩu" />

          <button className="w-full bg-blue-500 px-5 py-2 text-white text-[20px]">
            Đăng nhập
          </button>
          <a href="#" className="text-blue-400 text-[15px] mt-3 mb-5">
            Quên mật khẩu?
          </a>
          <div className="border-t w-full border-gray-400"></div>
          <button className="text-white bg-green-500 w-[150px] py-2 text-[15px] mt-5">
            Tạo tài khoản mới
          </button>
        </div>
        <div className="mt-3 w-[400px]">
          <p>
            <a href="#" className="font-[700]">Tạo Trang </a> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facebook1;
