import React from 'react'

const Sidebar = () => {
  return (
    <div className=''>
      <h1
        className="text-white font-bold text-3xl p-4 px-8 flex justify-between items-center"
        style={{ backgroundColor: "#1B1B28" }}
      >
        Dashboard
        <span>
          <img src="public/assets/Arrow double left active.png" alt="" className='ml-[75px] mr-8' />
        </span>
      </h1>
      <p
        className="text-white h-[52px] mt-8 flex text-[14px] justify-start px-6 gap-2 items-center"
        style={{ backgroundColor: "#1B1B28" }}
      >
        <span>
          <img src="public/assets/Layers.png" alt="" />
        </span>
        Dashboard
      </p>
      <p
        className="text-white ml-6 text-[12px] mt-[36px]"
        style={{ color: "#4A4B68" }}
      >
        CUSTOM
      </p>
      <p className="text-white h-[52px] mt-8 flex text-[14px] justify-start ml-6 gap-2 items-center">
        <span>
          <img src="public/assets/Layers.png" alt="" />
        </span>
        Applications
        <span>
          <img src="public/assets/Path 94.png" alt="" className="ml-[120px]" />
        </span>
      </p>
      <p
        className="flex px-10 items-center justify-between mt-4"
        style={{ color: "#4A4B68" }}
      >
        -&nbsp;&nbsp; Users{" "}
        <span>
          <img
            src="public/assets/Path 94.png"
            alt=""
            className="opacity-40 -rotate-90"
          />
        </span>{" "}
      </p>
      <p
        className="flex px-10 items-center justify-between mt-4"
        style={{ color: "#4A4B68" }}
      >
        -&nbsp;&nbsp; Contact{" "}
        <span>
          <img
            src="public/assets/Path 94.png"
            alt=""
            className="opacity-40 -rotate-90"
          />
        </span>{" "}
      </p>
      <p
        className="flex px-10 items-center justify-between mt-4 "
        style={{ color: "#4A4B68" }}
      >
        -&nbsp;&nbsp; Chat{" "}
        <span>
          <img
            src="public/assets/Path 94.png"
            alt=""
            className="opacity-40 -rotate-90"
          />
        </span>{" "}
      </p>
      <p
        className="text-white h-[52px] flex justify-start ml-6 gap-2 items-center"
        style={{ color: "#4A4B68" }}
      >
        <span>
          <img src="public/assets/Combined Shape (1).png" alt="" className='mr-1' 

          />
        </span>
        Pages
        <span>
          <img
            src="public/assets/Path 94.png"
            alt=""
            className="ml-[161px] -rotate-90 opacity-40"
          />
        </span>{" "}
      </p>
    </div>
  );
}

export default Sidebar
