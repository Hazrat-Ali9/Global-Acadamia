import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PiGraduationCap } from 'react-icons/pi'
import { BsBuildingsFill, BsXDiamondFill } from 'react-icons/bs'
import { RiTableAltFill } from 'react-icons/ri'
import { MdCastle } from 'react-icons/md'

const WhyChina = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="mb-10 container pt-28 px-6">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl text-center font-bold">
            Why Study in China?
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">Study in China</h1>
          </div>
        </div>

        {/* china study section  */}
        <div className="pt-10">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-4 text-[#ffffff]">
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              className="md:col-span-3 bg-[#77C8D7] px-6 py-5 rounded-lg"
            >
              <div className="grid md:grid-cols-2 gap-2">
                <ul className="font-semibold text-lg">
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> 100% Scholarship without IELTS !!
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> World Ranking Public Universities
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Full Free Tuition Fees
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Accommodation Fees Free
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> No Language Barrier
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Low Processing Cost
                  </li>
                </ul>
                <div className="grid grid-cols-3 gap-3">
                  <MdCastle size={70} />
                  <MdCastle size={70} />
                  <MdCastle size={70} />
                  <MdCastle size={70} />
                  <MdCastle size={70} />
                  <MdCastle size={70} />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              className="md:col-span-2 bg-[#fcae47] px-6 py-5 rounded-lg"
            >
              <div className="">
                <ul className="font-semibold text-lg ">
                  <li className="flex  items-center gap-2 ">
                    <BsXDiamondFill />
                    Monthly Stipend RMB 2000 – RMB 3,000 for
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Monthly Stipend RMB 600 – RMB 700 for
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill />
                    Accommodation facility for girls in separate hostel
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Visa Ratio High
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Hostel fees - FREE
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Study through English
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              className="md:col-span-2 bg-[#9C648A] px-6 py-5 rounded-lg"
            >
              <div className="">
                <ul className="font-semibold text-lg ">
                  <li className="flex  items-center gap-2 ">
                    <BsXDiamondFill /> It is easy to visit the country on
                    vacation.
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Food and other expenses are same as in
                    Bangladesh.
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Adequate security arrangements in the
                    campus.
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Besides studies, sports, gym, swimming
                    pool facilities
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Internship Facilities
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Study through English
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              className="md:col-span-3 bg-[#B9747E] px-6 py-5 rounded-lg"
            >
              <div className="grid md:grid-cols-2 gap-2">
                <ul className="font-semibold text-lg">
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Can Fly within a short time
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill />
                    World class education system.
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Part-time Job Facilities
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Provision of Halal Food
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> No Language Barrier
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Low Processing Cost
                  </li>
                </ul>
                <div className="grid grid-cols-3 gap-3">
                  <BsBuildingsFill size={70} />
                  <BsBuildingsFill size={70} />
                  <BsBuildingsFill size={70} />
                  <BsBuildingsFill size={70} />
                  <BsBuildingsFill size={70} />
                  <BsBuildingsFill size={70} />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              className="md:col-span-3 bg-[#6778B7] px-6 py-5 rounded-lg"
            >
              <div className="grid md:grid-cols-2 gap-2">
                <ul className="font-semibold text-lg">
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Our success rate is 100%
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Admission in right subject of choice
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Admission in right university
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Issuance of admission and offer letter
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Experienced Councillor
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Low Processing Cost
                  </li>
                </ul>
                <div className="grid grid-cols-3 gap-3">
                  <RiTableAltFill size={70} />
                  <RiTableAltFill size={70} />
                  <RiTableAltFill size={70} />
                  <RiTableAltFill size={70} />
                  <RiTableAltFill size={70} />
                  <RiTableAltFill size={70} />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1200"
              className="md:col-span-2 bg-[#68e8a8] px-6 py-5 rounded-lg"
            >
              <div>
                <ul className="font-semibold text-lg">
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Fast and seamless visa process assistance
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Provide A to Z support on visa processing
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Advising on everything from student visas
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Accommodation Fees Free
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> No Language Barrier
                  </li>
                  <li className="flex  items-center gap-2">
                    <BsXDiamondFill /> Low Processing Cost
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChina
