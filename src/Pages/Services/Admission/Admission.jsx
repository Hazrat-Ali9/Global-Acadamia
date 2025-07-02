import React from 'react'
import { PiGraduationCap } from 'react-icons/pi'
import v1 from '../../../assets/image/varsity1.avif'
import v2 from '../../../assets/image/versity2.avif'
import v3 from '../../../assets/image/varsity3.jpg'
import v4 from '../../../assets/image/varsity4.avif'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Admission = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="container px-6 md:pt-20 pt-8">
        {/*         Travel Support for Students  title*/}

        <div>
          <h1 className="md:text-3xl text-xl text-center font-bold tet text-[#000]">
            Expert Admissions Advisors
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">
              Admission
            </h1>
          </div>
        </div>

        {/* content university  */}
        <div className="pt-20">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <img
                  className="md:h-[240px] md:w-[310px] rounded-lg"
                  src={v1}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="md:h-[240px] md:w-[310px] rounded-lg"
                  src={v2}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="md:h-[240px] md:w-[310px] rounded-lg"
                  src={v3}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="md:h-[240px] md:w-[310px] rounded-lg  "
                  src={v4}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl text-[#09adfe] font-semibold">
                Navigating Your Journey to Academic Success
              </h1>
              <div className="pt-6 space-y-3">
                <div>
                  <div className="flex  items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-lg font-semibold text-[#09adfe]">
                      Our Admission Services
                    </h1>
                  </div>
                  <p className="md:pl-8">
                    We provide comprehensive admission support, guiding you
                    through the complex application process to secure your place
                    at top institutions.
                  </p>
                </div>
                <div>
                  <div className="flex  items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-lg font-semibold text-[#09adfe]">
                      Personalized Admission Strategies
                    </h1>
                  </div>
                  <p className="md:pl-8">
                    Our team of experienced advisors is dedicated to helping you
                    craft compelling applications and essays that stand out to
                    admissions committees.
                  </p>
                </div>
                <div>
                  <div className="flex  items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-lg font-semibold text-[#09adfe]">
                      Tailored Solutions for Your Goals
                    </h1>
                  </div>
                  <p className="md:pl-8">
                    We offer personalized solutions, whether you're applying to
                    universities, colleges, graduate programs, ensuring your
                    unique aspirations are met.
                  </p>
                </div>
                <div>
                  <div className="flex  items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-lg font-semibold text-[#09adfe]">
                      Navigating Scholarships and Financial Aid
                    </h1>
                  </div>
                  <p className="md:pl-8">
                    We assist in finding scholarships and financial aid
                    opportunities to make your education affordable.
                  </p>
                </div>
                <div>
                  <div className="flex  items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-lg font-semibold text-[#09adfe]">
                      Making Dreams a Reality
                    </h1>
                  </div>
                  <p className="md:pl-8">
                    Let us turn your academic dreams into reality by
                    streamlining your admissions journey and providing
                    unwavering support from start to finish
                  </p>
                </div>
              </div>
              {/* course  */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap pt-3 items-center gap-4 ">
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">
              Diploma Programs
            </h1>
          </div>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">
              Bachelor Programs
            </h1>
          </div>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">
              Master Programs
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admission
