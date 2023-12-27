 import React from 'react'
 
const Sales =({img})=>{
    return (
      <div className="sales-below flex gap-4 items-center ml-2 ">
        <div className="img">
          <img src={img} alt="" className="w-8" />
        </div>
        <div className="text flex flex-col">
          <div className="text-heading text-xs font-medium opacity-90">Briviba SaaS</div>
          <div className="text-subheading text-xs text-[#B5B5C3] ">
            PHP, SQLite, Artisan CLIмм
          </div>
        </div>
      </div>
    );
}

 const SalesProgress = () => {
   return (
     <div className="sales-container bg-white h-[380px] p-4 rounded-md ">
       <div className="sales-heading-container flex justify-between p-2 mb-4">
         <h1 className='text-lg  font-semibold opacity-80  '>Sales Progress</h1>
         <img src="src/assets/Dots.png" alt="" className="object-contain" />
       </div>
       <div className="sales-below-container flex flex-col gap-4">
         <Sales img="src/assets/Icon.png"></Sales>
         <Sales img="src/assets/Icon (1).png "></Sales>
         <Sales img="src/assets/Icon (2).png"></Sales>
         <Sales img="src/assets/Icon (3).png"></Sales>
         <Sales img="src/assets/Icon (4).png"></Sales>
       </div>
     </div>
   );
 }
 
 export default SalesProgress
 