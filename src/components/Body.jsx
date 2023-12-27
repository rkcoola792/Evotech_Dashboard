import React from 'react'
import Category from './elements/Category';
import Gifts from './elements/Gifts';
import SalesProgress from './elements/SalesProgress';
import NewArrivals from './elements/NewArrivals';

const Body = () => {
  return (
    <div className="pt-4 bg-slate-100 mt-4 h-full ml-80 pb-6">
      <div className="top-container h-[400px] w-full  flex">
        <div className="left-div  p-4 w-[70%] ">
          <div className="top  p-2 h-2/6 flex gap-8">
            <Category
              name="Saas Application"
              img="src/assets/Library.png"
            ></Category>
            <Category
              name="Main Categories"
              img="src/assets/Layout-4-blocks.png"
            ></Category>
            <Category
              name="Video Tutorials"
              img="src/assets/Movie.png"
            ></Category>
            <Category
              name="Sales Statistics"
              img="src/assets/Equalizer (1).png"
            ></Category>
            <Category
              name="Arc Security"
              img="src/assets/Shield-check (1).png"
            ></Category>
          </div>
          <div className="bottom  mt-8  flex h-4/6">
            <div className="left  p-2 w-1/2">
              <img src="src/assets/Widget 1.png" alt="" />
            </div>
            <div className="right  p-2 w-1/2">
              <img src="src/assets/Widget 2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="right-div  pt-4 w-[30%] flex flex-wrap ">
          <Gifts img="src/assets/ecm007.png" name="Great Gifts"></Gifts>
          <Gifts img="src/assets/teh008.png" name="Great Gifts"></Gifts>
          <Gifts img="src/assets/teh004.png" name="Great Gifts"></Gifts>
          <Gifts img="src/assets/abs025.png" name="Great Gifts"></Gifts>
          <Gifts img="src/assets/ecm002.png" name="Great Gifts"></Gifts>
          <Gifts img="src/assets/gen002.png" name="Great Gifts"></Gifts>
        </div>
      </div>
      <div className="mid-container flex px-4">
        <div className="left w-[35%] pl-2 pt-4 rounded-lg">
          <SalesProgress></SalesProgress>
        </div>
        <div className="right w-[70%] p-4">
          <NewArrivals></NewArrivals>
        </div>
      </div>
      <div className="bottom-container"></div>
    </div>
  );
}

export default Body
