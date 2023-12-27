import React from 'react'

const Category = ({name,img}) => {
    let color = "#B5B5C3";
    if (name=="Video Tutorials")
    color="white"
  return (
    <div
      className={
        "w-[120px] h-[130px] rounded-xl flex flex-col justify-center items-center text-center " +
        (name == "Video Tutorials" ? "bg-[#50CD89] " : "bg-white")
      }
    >
      <img src={img} alt="" className="w-8 mt-2" />
      {}
      <p
        style={{ color: color, fontSize: 12 }}
        className="w-[60px] mt-2"
      >
        {name}
      </p>
    </div>
  );
}

export default Category
