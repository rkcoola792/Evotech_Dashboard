import React from 'react'

const Header = () => {
  return (
    <div className="h-32 w-full">
      <div className="upper-container flex justify-end mr-8 gap-4 mt-4">
        <img src="public/assets/Search.png" className="object-contain" alt="" />
        <img src="public/assets/Compiling.png" alt="" className="object-contain" />
        <img
          src="public/assets/Equalizer (2).png"
          alt=""
          className="object-contain"
        />
        <img src="public/assets/Cart.png" alt="" className="object-contain" />
        <img
          src="public/assets/Layout-4-blocks (2).png"
          alt=""
          className="object-contain"
        />
        <p className="text-gray-400 mt-2 ml-8" style={{ color: "#959CB6" }}>
          Nick Thomas
        </p>
        <div
          className="w-[43px] h-[43px] justify-center items-center flex rounded-md bg-green-200"
          style={{ color: "#0BB783" }}
        >
          N
        </div>
      </div>
      <hr className="mt-2" />
      <div className="lower-container flex justify-between shadow-md">
        <div className="left-container flex gap-16 p-4 px-6 items-center ml-80">
          <p style={{ color: "#434349", fontWeight: 600 }}>Dashboard</p>
          <p
            style={{ backgroundColor: "#FFF4DE", color: "#FFA800" }}
            className="p-2 px-6 rounded-md"
          >
            Add New
          </p>
        </div>
        <div className="right-container flex gap-4 items-center pr-8">
          <p
            className="p-2 rounded-md px-4"
            style={{
              backgroundColor: "#F3F6F9",
              color: "#959CB6",
              fontWeight: 500,
            }}
          >
            Today
          </p>
          <p className="" style={{ color: "#959CB6", fontWeight: 500 }}>
            Month
          </p>
          <p className="" style={{ color: "#959CB6", fontWeight: 500 }}>
            Year
          </p>
          <p className="p-2 px-4 rounded-md" style={{  backgroundColor: "#F3F6F9",color: "#959CB6", fontWeight: 500 }}>
            Actions
          </p>
          <img src="public/assets/File Plus icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header
