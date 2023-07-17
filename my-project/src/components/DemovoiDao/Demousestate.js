import React, { startTransition, useState } from "react";

const Demousestate = () => {
  const [Demo2, setDemo2] = useState(1);
  const count = () => {
    setDemo2((a) => {
      return a + 1;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ">
      <h1 className="text-2xl mb-5">{Demo2}</h1>
      <button
        onClick={count}
        className="border bg-blue-300 text-xl text-red-500 px-5 py-3"
      >
        an zo
      </button>
    </div>
  );
};

export default Demousestate;
