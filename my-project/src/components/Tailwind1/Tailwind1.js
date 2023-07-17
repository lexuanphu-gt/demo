import React from "react";

const Tailwind1 = () => {
  return (
    <div>
      <div className="flex justify-between px-10 py-5 mb-5 ">
        <div className="mr-10 ">
          <img
            className="w-[100%]"
            src="https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/logo.png"
            alt="wedsite logo"
          ></img>
        </div>
        <div className="flex justify-between items-center text-[20px] gap-10 w-[700px]">
          <a className=" hover:text-red-500  transition-all" href="#">
            Home
          </a>
          <a className=" hover:text-red-500 transition-all" href="#">
            Product
          </a>
          <a className=" hover:text-red-500 transition-all" href="#">
            FAQ
          </a>
          <a className=" hover:text-red-500 transition-all" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="w-full bg-no-repeat bg-cover h-[620px] flex justify-center items-center  bg-[url('https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/banner.png')]">
        <div className="xl:max-w-[700px] max-w-[4fac00px]">
          <div className="  flex flex-col justify-center items-center text-white">
            <p className="text-xl mb-10 mt-10">Food app</p>
            <h1 className="min-w-[400px] text-5xl text-center mb-7 font-bold  leading-relaxed">
              Why stay hungry when you can order form Bella Onojie
            </h1>
            <p className="text-xl mb-7 font-light">
              Download the bella onoje’s food app now on
            </p>
          </div>
          <div className="flex justify-center items-center gap-10 mb-10">
            <button className="px-10 py-5 bg-red-500 border-transparent rounded-full hover:bg-white transition-all hover:bg-transparent">
              Playstore
            </button>
            <button className="px-10 py-5 bg-white border-transparent rounded-full hover:bg-red-500 transition-all ">
              Appstore
            </button>
          </div>
        </div>
        
      </div>
      <div className=" flex justify-center items-center">
        <div className=" mt-10 ">
        <img className=" "
          src="https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/app-img.png"
          alt=""
        ></img>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div>
          <hr className="mb-10"></hr>
          <h1 className="text-4xl mb-20 font-bold">How the app works</h1>
        </div>
        <div className="mx-20">
          <div className="flex justify-between mb-10 ">
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/app-1.png"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col justify-center gap-10 w-[45%] ">
              <span className="text-red-500 font-semibold">
                Create an account
              </span>
              <h1 className="text-4xl text-blue-900 font-bold leading-relaxed">
                Create/login to an existing account to get started
              </h1>
              <p className="text-xl font-light">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between mb-10 ">
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/app-2.png"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col justify-center gap-10 w-[45%] ">
              <span className="text-red-500 font-semibold">
                Create an account
              </span>
              <h1 className="text-4xl text-blue-900 font-bold leading-relaxed">
                Create/login to an existing account to get started
              </h1>
              <p className="text-xl font-light">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-10 ">
            <div className=" ">
              <img
                src="https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/app-3.png"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col justify-center gap-10 w-[45%] ">
              <span className="text-red-500 font-semibold">
                Create an account
              </span>
              <h1 className="text-4xl text-blue-900 font-bold leading-relaxed">
                Create/login to an existing account to get started
              </h1>
              <p className="text-xl font-light">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="mt-20 h-[400px] bg-[url('https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/download.png')]">
        <div className="pt-20 flex flex-col justyfi-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-10">Download the app now</h1>
          <p className="text-xl font-light ">
            Available on your favorite store. Start your premium experience now
          </p>
        </div>
        <div className="flex justify-center items-center gap-10 mt-7">
          <button className="px-10 py-5 bg-red-500 border-transparent rounded-full hover:bg-white transition-all hover:bg-transparent">
            Playstore
          </button>
          <button className="px-10 py-5 bg-white border-transparent rounded-full hover:bg-red-500 transition-all ">
            Appstore
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-10 px-20">
        <div className="flex justify-between">
          <div>
            <img
              src="https://raw.githubusercontent.com/lexuanphu-gt/demo/main/my-project/public/img/logo.png"
              alt=""
            ></img>
          </div>
          <div className="flex justify-center items-center gap-10">
            <a href="09123456">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p>09123456</p>
            </a>
            <a href="giveme@info.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p>info@me.com</p>
            </a>
          </div>

        </div>
        <div className="flex items-center justify-center mt-10 mb-5">
        <p>Copy © 2021 Bella Onojie</p>

        </div>
      </div>
    </div>
  );
};

export default Tailwind1;
