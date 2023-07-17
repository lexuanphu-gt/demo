import React, { useState } from "react";

const Note = () => {
  const [count, setCount] = useState(5);
  console.log("🚀 ~ file: Note.js:5 ~ Note ~ count:", count);

  // function handleCount() {

  // }

  const handle = () => {
    setCount((count)=> count + 1);
  };

  // const handleCount = () => {
  //   setCount(!count);
  // };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-[100%] border">
      {/* {count ? <h1>a</h1> : <h1>b</h1>} */}
      <h1
        className={`text-2xl text-center mb-5 border px-5 py-3  ${
          count ? "bg-blue-300" : "bg-red-400"
        } `}
      >
        {count}
      </h1>
      <button
        onClick={handle}
        className="border text-xl text-red-500 bg-gray-300 px-5 py-3 "
      >
        an zo
      </button>
    </div>
  );
};

export default Note;
