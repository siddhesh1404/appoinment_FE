import React from 'react'
import { Stethoscope,Save } from "lucide-react";

function Add_Docter() {
  return (
    <div className='min-h-screen  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-start justify-center '>
       <div className="p-6">
      <div className=" bg-white mx-auto mt-20 p-8 rounded-lg shadow-lg border border-[#E8E8E8]">
        <h2 className="text-center text-2xl font-bold text-[#5e5e5e]">
          Add New Docto</h2>
        <div>
          <form className="mt-4 ">

            <div className='flex   w-full gap-4'>
              <div className="">
                <lable className="block mb-1 text-[#5e5e5e]">
                  Name
                </lable>
                <input type="email" className="w-full p-2 border border-[#DADADA] rounded mb-2" />
              </div>
              <div>
                <lable className="block mb-1 text-[#5e5e5e]">
                 email
                </lable>
                <input type="password" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
              </div>
                <div>
                <lable className="block mb-1 text-[#5e5e5e]">
                  Mobile No:
                </lable>
                <input type="number" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
              </div>
            </div>
             <div className='flex   w-full gap-4'>
              <div className="">
                <lable className="block mb-1 text-[#5e5e5e]">
                  Specialization
                </lable>
                <input type="text" className="w-full p-2 border border-[#DADADA] rounded mb-2" />
              </div>
              <div>
                <lable className="block mb-1 text-[#5e5e5e]">
                 Qualification
                </lable>
                <input type="text" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
              </div>
                <div>
                <lable className="block mb-1 text-[#5e5e5e]">
                 Registration Number
                </lable>
                <input type="number" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
              </div>
            </div>
             <div className='flex   w-full gap-4'>
              <div className="">
                <lable className="block mb-1 text-[#5e5e5e]">
                  Department
                </lable>
                <input type="text" className="w-full p-2 border border-[#DADADA] rounded mb-2" />
              </div>
              <div>
                <lable className="block mb-1 text-[#5e5e5e]">
                 Qualification
                </lable>
                <input type="text" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
              </div>
                <div>
                <lable className="block mb-1 text-[#5e5e5e]">
                 Registration Number
                </lable>
                <input type="number" className="w-full p-2 border rounded mb-5 border-[#DADADA]" />
              </div>
            </div>
            <div className='w-full  justify-center flex  '>
              <button  onClick={""} type="button" className="w-1/2 flex justify-center bg-gradient-to-r from-purple-400 to-indigo-500  text-white py-2 rounded cursor-pointer">Login
              <Save size={25} className='ml-3'  /></button>
              
            </div>


          </form>
          <p className="text-left mt-4 text-[#5e5e5e]"></p>
        </div>
      </div>
    </div> 
      
    </div>
  )
}

export default Add_Docter
