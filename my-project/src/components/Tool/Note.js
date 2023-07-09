import React from "react";

const Note = ({ src, text }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <img
        className="w-[80px] "
        // src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
        src={src}
        alt="#"
      ></img>
      <button className="text-[12px] w-[80px] ">{text}</button>
    </div>
  );
};

export default Note;
