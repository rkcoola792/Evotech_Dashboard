
import React from 'react'
import NewArrivalElement from './NewArrivalElement';

const NewArrivals = () => {
  return (
    <div className="new-arrivals bg-white  h-[380px] p-4 px-6 rounded-xl">
      <div className="top flex justify-between items-center">
        <div className="left flex flex-col gap-1 mt-2">
          <h1 className="font-semibold opacity-80">New Arrivals</h1>
          <p className="text-[#B5B5C3] text-sm"> More than 400+ new members</p>
        </div>
        <div className="right flex gap-4 items-center">
          <div className="month text-[#B5B5C3]">Month</div>
          <div className="week text-[#B5B5C3]">Week</div>
          <div className="day bg-[#464E5F] px-4 p-2 text-white rounded-md">
            Day
          </div>
        </div>
      </div>
      <div className="bottom">
        <NewArrivalElement
            
          name="Sant Outstanding"
          status="public/Button (5).png"
          amount="2,000,000"
          img="/public/184-plurk.png"
        ></NewArrivalElement>
        <NewArrivalElement
          name="Telegram Application"
          status="public/Button (1).png"
          amount="4,600,000"
          img="/public/186-telegram (1).png"
        ></NewArrivalElement>
        <NewArrivalElement
          name="Cisco Management"
          status="public/Button (2).png"
          amount="560,000"
          img="/public/194-puzzle.png"
        ></NewArrivalElement>
        <NewArrivalElement
          name="HR Management"
          status="public/Button (3).png"
          amount="57,000"
          img="/public/182-bebo.png"
        ></NewArrivalElement>
        <NewArrivalElement
          name="KTR Mobile Application"
          status="public/Button (1).png"
          amount="45,200,000"
          img="/public/187-kickstarter.png"
        ></NewArrivalElement>
      </div>
    </div>
  );
}

export default NewArrivals
