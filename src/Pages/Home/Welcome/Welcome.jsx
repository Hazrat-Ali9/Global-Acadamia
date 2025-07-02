import React from 'react'
import { PiGraduationCap, PiStudentDuotone } from 'react-icons/pi'
import { FaUniversity, FaFileInvoiceDollar } from 'react-icons/fa'
import { BiBookBookmark } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <>
      <div className="md:pt-28 pt-10">
        <div>
          <h1 className="text-center md:text-3xl text-xl font-bold">
            Discover Global Academia
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">Discover</h1>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-4 grid-cols-1 gap-3  px-6 container">
          {/* Students  */}

          <div
            onClick={topFunction}
            className="bg-[#282d36] px-6 py-3  hover:bg-black cursor-pointer"
          >
            <Link to="/about" className="flex  items-center  gap-8">
              <div>
                <PiStudentDuotone size={65} className="text-[#09adfe]" />
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                <h2>300+</h2>
                <h1>Students</h1>
              </div>
            </Link>
          </div>

          {/* University  */}

          <div
            onClick={topFunction}
            className="bg-[#282d36] px-6 py-3  hover:bg-black cursor-pointer"
          >
            <Link to="/study" className="flex  items-center  gap-8">
              <div>
                <FaUniversity size={65} className="text-[#09adfe]" />
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                <h2>150+</h2>
                <h1>University</h1>
              </div>
            </Link>
          </div>
          {/* Scholarship  */}
          <div
            onClick={topFunction}
            className="bg-[#282d36] px-6 py-3  hover:bg-black cursor-pointer"
          >
            <Link to="/scholarship" className="flex  items-center  gap-8">
              <div>
                <FaFileInvoiceDollar size={65} className="text-[#09adfe]" />
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                <h2>100%</h2>
                <h1>Scholarship</h1>
              </div>
            </Link>
          </div>
          {/* Visa Success  */}
          <div
            onClick={topFunction}
            className="bg-[#282d36] px-6 py-3  hover:bg-black cursor-pointer"
          >
            <Link to="/services" className="flex  items-center  gap-8">
              <div>
                <BiBookBookmark size={70} className="text-[#09adfe]" />
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                <h2>100%</h2>
                <h1>Visa Success</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
