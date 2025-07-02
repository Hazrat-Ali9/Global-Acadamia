import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai'
import './AScholaship.css'

const AScholarship = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="my-14 ">
        <div className="studentPic bg-fixed">
          <div className=" px-6 pt-24  bg-slate-400 bg-opacity-50 h-full">
            <div className="container">
              <h1 className="text-white md:text-2xl text-xl font-bold">
                Admission is Going On {currentYear}
              </h1>
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-[#ffffff]">
                  Get Scholarship
                </h2>
              </div>
              {/* -------phone------  */}
              <div className="flex items-center gap-2 mt-4 text-[#ffffff]">
                <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                  <AiTwotonePhone className="" size={25} />
                </div>
                <div className="text-[16px]  font-medium">
                  <p>+88 0179-3636735</p>
                </div>
              </div>

              <div>
                <h1 className="text-white md:text-xl text-lg font-semibold pt-4">
                  Study abroad from Bangladesh with 100% scholarship
                </h1>
              </div>
              <div>
                <h1 className="text-white md:text-lg text-[15px] font-medium pt-4 md:w-5/12">
                  Exploring scholarship opportunities and applying diligently
                  can open doors to educational pursuits and future career
                  success, so it's crucial for students to research and pursue
                  these funding options.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AScholarship
