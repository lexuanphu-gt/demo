import React from "react";
import Note from "../Tool/Note";

const Laptop88 = () => {
  return (
    <div className="">
      <div className="w-full  bg-black border">
        <div className="flex justify-center items-center py-3 px-5">
          <img
            className="w-[150px] mr-2"
            src="https://laptop88.vn/media/banner/logo_logo882022.png"
            alt="#"
          ></img>
          <input
            className="rounded-2xl px-5 py-1 border mr-2"
            placeholder="Tìm Kiếm"
          ></input>
          <div className="flex gap-2 text-[12px] text-[#ff9300]">
            <p className="">Góp ý khiếu nại</p>
            <p className="">Tra cứu bảo hành</p>
            <p className="">Liên hệ trực tiếp</p>
            <p className="">Tư vấn mua hàng</p>
          </div>
          <div className=" ml-2 flex flex-col gap-2">
            <p className="text-[12px] bg-[#ff9300] rounded-xl px-1">
              Chính sách
            </p>
            <p className="text-[12px] bg-[#ff9300] rounded-xl px-1">
              Tuyển dụng
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-7 justify-center">
        <p className="bg-[#ff9300] px-5 py-3 w-[170px] text-[10px]">
          DANH MỤC SẢN PHẨM
        </p>
        <p className="text-[10px] px-4 py-3">
          Zenbook Q409 Gen 12-Màn đẹp 15.xxx
        </p>
        <div className="border border-r"></div>
        <p className="text-[10px] px-4 py-3">
          Dell Gaming G15 2022 Rẻ Nhất TT chỉ 18 Triệu!
        </p>
        <div className="border border-r"></div>
        <p className="text-[10px] px-4 py-3">
          Victus chính hãng RTX 3050-Giá Shock
        </p>
      </div>
      <div className="border border-t"></div>
      <div className="flex ">
        <div className="px-7 text-[12px]">
          <p className="px-7 hover:bg-[#ff9300] w-[170px]">Laptop Mới</p>
          <p className="px-7 hover:bg-[#ff9300] w-[170px]">Laptop Cũ</p>
          <p className="px-7 hover:bg-[#ff9300] w-[180px]">
            Linh kiện PC-Máy tính
          </p>
          <p className="px-7 hover:bg-[#ff9300] w-[170px]">
            PC-Máy tính để bàn
          </p>
          <p className="px-7 hover:bg-[#ff9300] w-[170px]">Màn hình máy tính</p>
          <p className="px-7 hover:bg-[#ff9300] w-[170px]">Bảo hành-Hậu mãi</p>
          <p className="px-7 hover:bg-[#ff9300] w-[170px]">Phụ kiện máy tính</p>
          <p className="px-7 hover:bg-[#ff9300] w-[170px]">cho thuê laptop</p>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <img
          className="w-[300px] pl-10"
          src="https://laptop88.vn/media/banner/05_Juld53fef344e209bad68d20c1e7bc952e6.jpg"
          alt="#"
        ></img>
        <img
          className="w-[300px]"
          src="https://laptop88.vn/media/banner/28_Jun7340d8e4d66db96ef7f6670089a04944.jpg"
          alt="#"
        ></img>
        <img
          className="w-[300px] pr-10"
          src="https://laptop88.vn/media/banner/16_Junbcb2d55757cc1332265de7a92b72cc2d.jpg"
          alt="#"
        ></img>
      </div>
      <div className="flex justify-center pt-10 gap-5">
        {/* <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
            alt="#"
          ></img>
          <button className="text-[12px]">Chuột máy tính</button>
        </div> */}
        {/* <div className="pr-5 flex flex-col gap-3 justify-center ">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_banphim.png"
            alt="#"
          ></img>
          <button className="text-[12px] ">Bàn phím</button>
        </div>
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_balo.png"
            alt="#"
          ></img>
          <button className="text-[12px]">Balo, túi xách</button>
        </div>
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_tainghe.png"
            alt="#"
          ></img>
          <button className="text-[12px]">Loa, tai nghe</button>
        </div>
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_o_cung.png"
            alt="#"
          ></img>
          <button className="text-[12px]">Ổ cứng di động</button>
        </div>
      </div>
      <div className="flex justify-center pl-10 pt-10">
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_daychuyendoi.png"
            alt="#"
          ></img>
          <button className="text-[12px] text-center">Cổng chuyển đổi</button>
        </div>
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_bandi.png"
            alt="#"
          ></img>
          <button className="text-[12px] ">Bàn di chuột</button>
        </div>
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_usb.png"
            alt="#"
          ></img>
          <button className="text-[12px]">USB flash</button>
        </div>
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_keotainhiet.png"
            alt="#"
          ></img>
          <button className="text-[12px]">Keo tản nhiệt</button>
        </div>
        <div className="pr-5 flex flex-col gap-3 justify-center">
          <img
            className="w-[80px] "
            src="https://laptop88.vn/media/lib/17-06-2022/icon_banquuyen.png"
            alt="#"
          ></img>
          <button className="text-[12px] w-[80px]  ">Phần mềm bản quyền</button>
        </div> */}
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />

        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />
      </div>
      <div className="flex justify-center pt-10 gap-5">
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />

        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính"
        />
        <Note
          src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
          text="Chuột máy tính chuooi may tinh "
        />
      </div>
      <div className="flex justify-center pt-10">
        <img
          className="w-[300px] pl-10"
          src="https://laptop88.vn/media/banner/14_Feb106fb2e4fa26a8e9108f6868c4a0ab9e.png"
          alt="#"
        ></img>
        <img
          className="w-[300px]"
          src="https://laptop88.vn/media/banner/08_Febde78649a3de2f1ff7425b8034e7d03eb.png"
          alt="#"
        ></img>
        <img
          className="w-[300px] pr-10"
          src="https://laptop88.vn/media/banner/14_Feb50819b9c8940a1887f3f3c1eec9a4818.png"
          alt="#"
        ></img>
      </div>
    </div>
  );
};

export default Laptop88;
