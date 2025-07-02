import React, { useEffect } from 'react'
import './Admission.css'
import { AiTwotonePhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Admission = () => {
  const currentYear = new Date().getFullYear()
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="md:my-14 ">
        <div className="studentPic bg-fixed  ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="px-6 pt-24  bg-slate-500 bg-opacity-50 h-full"
          >
            <div className="container">
              <h1 className="text-white md:text-2xl text-xl font-bold">
                Admission is Going On {currentYear}
              </h1>
              <div className="mt-4">
                <Link to="/contact">
                  <button className="bg-[#09adfe] text-[#ffffff] text-lg py-2 px-5 rounded-lg">
                    Register for Free consultation
                  </button>
                </Link>
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
                <h1 className="text-white md:text-2xl text-xl font-bold pt-4">
                  A World of Education Awaits You
                </h1>
              </div>
              <div>
                <h1 className="text-white md:text-2xl text-xl font-bold pt-4">
                  Study abroad from Bangladesh with 100% scholarship
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admission
