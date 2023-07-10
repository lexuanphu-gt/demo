import React from "react";

const Tailwind = () => {
  // logic
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        <div className="w-32 md:w-full  z-20">
          <img
            src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/logo.png"
            alt="wedsite logo"
          ></img>
        </div>
        <div className="invisible md:visible fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-900 md:bg-transparent md:h-auto md:flex-row md:justify-between md:static">
          <a
            className="m-12 md:m-0 text-white md:text-black hover:text-red-500 transition-all"
            href="#"
          >
            Home
          </a>
          <a
            className="m-12 md:m-0 text-white md:text-black hover:text-red-500 transition-all"
            href="#"
          >
            Product
          </a>
          <a
            className="m-12 md:m-0 text-white md:text-black hover:text-red-500 transition-all"
            href="#"
          >
            FAQ
          </a>
          <a
            className="m-12 md:m-0 text-white md:text-black hover:text-red-500 transition-all"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div  className="bg-[url('')] top-1/2 left-1/2 transform-translate-x-1/2-translate-y-1/2 text-center z-10">
        <div>
          <p className="text-xl mb-5">Food app</p>
          <h1 className="text-4xl mb-5 font-bold max:w-2xl md:leading-relaxed md:text-5xl">
            Why stay hungry when you can oder form Bella Onojle
          </h1>
          <p className="mb-5 font-light">
            Download the bella onoje food app now on
          </p>
          <div className="flex justify-center">
            <button className="mx-4 border-transparent bg-red-500 px-10 py-3 rounded-full hover:bg-transparent hover:bg-white transition-all">
              Playstore
            </button>
            <button className="mx-4 border-transparent bg-white px-10 py-3 rounded-full hover:bg-transparent hover:bg-red-500 transition-all">
              Appstore
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="">
          <img
            className=" "
            src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-img.png"
            alt="phone app screens"
          ></img>
        </div>
      </div>
      <div className="pt-96 mt-28 md:mt-0">
        <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5"></hr>
        <h2 className="text-center text-4xl font-semibold py-10">How the app works</h2>
        <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div className="text-center mb-10">
            <img
              src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-1.png"
              alt="app screen"
            ></img>
          </div>
          <div className="text-center md:text-left">
            <span className="text-red-500 font-semibold">Create an account</span>
            <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/login to an existing account to get started</h2>
            <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">An account is created with your email and a desised password</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div className="text-center mb-10 order-1 md:order-2">
            <img
              src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-1.png"
              alt="app screen"
            ></img>
          </div>
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="text-red-500 font-semibold">Create an account</span>
            <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/login to an existing account to get started</h2>
            <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">An account is created with your email and a desised password</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
          <div className="text-center mb-10">
            <img
              src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/app-1.png"
              alt="app screen"
            ></img>
          </div>
          <div className="text-center md:text-left">
            <span className="text-red-500 font-semibold">Create an account</span>
            <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">Create/login to an existing account to get started</h2>
            <p className="text-xl text-gray-500 font-light max-w-sm max-auto md:mx-0">An account is created with your email and a desised password</p>
          </div>
        </div>
      </div>
      <div className="top-1/2 left-1/2 transform-translate-x-1/2-translate-y-1/2 text-center z-10">
        <div>
          <h1 className="text-4xl mb-5 font-bold  md:leading-relaxed md:text-5xl">Download the app now</h1>
          <p className="text-xl mb-5 font-light">
            Available on your favorite store, Start your premium experience now
          </p>
          <div>
          <button className="mx-4 border-transparent bg-red-500 px-10 py-3 rounded-full hover:bg-transparent hover:bg-white transition-all">
              Playstore
            </button>
            <button className="mx-4 border-transparent bg-white px-10 py-3 rounded-full hover:bg-transparent hover:bg-red-500 transition-all">
              Appstore
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <div className="w-32 md:w-full">
            <img
              src="https://raw.githubusercontent.com/PASSIONCORNERS/tailwind_vn/main/public/img/logo.png"
              alt="wedsite logo"
            ></img>
          </div>
          <div className="flex items-center mt-5 text-gray-500 w-full justify-center md:justify-end">
            <a className="flex mx-4" href="tel.09123456">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-4 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p>09123456</p>
            </a>
            <a className="flex mx-4" href="mailto.info@me.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-4 text-red-500"
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
        <div className="text-center my-4">
          <p className="font-bold text-2xl">Thank you</p>
        </div>
      </div>
    </div>
  );
};

export default Tailwind;
