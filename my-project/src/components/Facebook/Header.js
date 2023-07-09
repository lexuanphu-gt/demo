import React from "react";

const Facebook = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="w-[300px]">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="#"
        />
      </div>
      <p className="w-[500px] text-2xl text-center">
        Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
        bạn.
      </p>
      <div className="w-[500px] p-5 bg-red-100 flex flex-col justify-center items-center gap-4">
        <input className="w-full py-2 px-5 " placeholder="Email hoặc số điện thoại" />
        <input className="w-full py-2 px-5 " placeholder="Mật khẩu " />
        <button className="text-white bg-blue-500 px-5 py-2 w-full text-[20px] rounded-lg hover:bg-blue-600 transition-all ">Đăng nhập</button>
        <a href="#" className="pb-5 border-b w-full border-black text-center">Quên mật khẩu ?</a>
        <button className="text-white bg-green-500 px-5 py-3 w-[200px] rounded-lg">Tạo tài khoản mới</button>
      </div>
      <p>Tạo Trang dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp</p>
    </div>
  );
};

export default Facebook;
