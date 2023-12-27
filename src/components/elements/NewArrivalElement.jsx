import React from 'react'

const NewArrivalElement = ({amount,img,status,name}) => {
  return (
    <div className="newArrival-element flex justify-between items-center mt-6 mb-6">
      <div className="left-container flex items-center justify-between gap-2 w-[60%]">
        <div className="flex items-center gap-2">
          <div className="img bg-slate-100 p-1 rounded-lg">
            <img className="w-6" src={img} alt="" />
          </div>
          <div className="heading-text flex flex-col ">
            <div className="heading font-semibold text-xs opacity-80">
              {name}
            </div>
            <div className="sub-heading text-xs ">
              FTP: <span className="text-[#B5B5C3]">bprow@bnc.cc</span>
            </div>
          </div>
        </div>
        <div className="right flex flex-col  mr-2 ">
          <div className="amount text-xs font-semibold opacity-80">
            ${amount}
          </div>
          <div className="status text-[#B5B5C3] text-xs text-right">Paid</div>
        </div>
      </div>
      <div className="right-container w-[40%] flex justify-between px-2 ml-6">
        <div className="left  ">
          <img src={status} alt="" />
        </div>
        <div className="right flex gap-2 mb-1">
          <img className="w-6" src="src/assets/Button Settings.png" alt="" />
          <img className="w-6" src="src/assets/Button Edit.png" alt="" />
          <img className="w-6" src="src/assets/Button Trash.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewArrivalElement
