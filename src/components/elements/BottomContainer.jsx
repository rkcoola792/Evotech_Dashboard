import React from 'react'

const BottomContainer = () => {
  return (
    <div className="bottom-container flex ">
      <div className="left w-[60%] ml-6 ">
        <div className="top flex justify-between items-center bg-white p-4  px-6 rounded-xl">
          <div className="left flex flex-col gap-1 mt-2">
            <h1 className="font-semibold opacity-80">Recent Stats</h1>
            <p className="text-[#B5B5C3] text-sm">
              {" "}
              More than 400+ new members
            </p>
          </div>
          <div className="right flex gap-4 items-center">
            <div className="month text-[#B5B5C3]">Month</div>
            <div className="week text-[#B5B5C3]">Week</div>
            <div className="day bg-[#464E5F] px-4 p-2 text-white rounded-xl">
              Day
            </div>
          </div>
        </div>

        <img className="bg-white px-8 py-2" src="src/assets/Chart.png" alt="" />
      </div>

      <div className="right w-[40%] flex flex-wrap ml-3 mr-2">
        <img
          className="w-[150px] mx-2 mb-6 ml-4 rounded-xl"
          src="src/assets/Cart 1.png"
          alt=""
        />
        <img
          className="w-[150px] mx-2 mb-6 ml-4 rounded-xl"
          src="src/assets/Cart 2.png"
          alt=""
        />
        <img
          className="w-[150px] mx-2 rounded-xl ml-4"
          src="src/assets/Cart 3.png"
          alt=""
        />
        <img
          className="w-[150px] mx-2 rounded-xl ml-4"
          src="src/assets/Cart 4.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default BottomContainer
