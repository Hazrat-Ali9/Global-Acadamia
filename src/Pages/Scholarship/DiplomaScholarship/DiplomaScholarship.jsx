import React from 'react'
import sholarship3 from '../../../assets/image/scholarship3.avif'
import { PiGraduationCap } from 'react-icons/pi'
import { FaCentos } from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const DiplomaScholarship = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="container px-6 md:py-16 pt-8">
        {/*         Travel Support for Students  title*/}

        <div>
          <h1 className="md:text-3xl text-2xl text-center font-bold tet text-[#000]">
            Scholarship for Diploma Students
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">
              Scholarship
            </h1>
          </div>
        </div>
        {/*       Funding Your Diploma Journey  */}
        <div className="md:pt-16 pt-8 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <h1 className="text-2xl text-[#09adfe] font-semibold">
              Funding Your Diploma Journey:
            </h1>
            <div className="space-y-2 pt-3">
              <div className="flex gap-3">
                <span className="pt-1">
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Welcome to Global Academia's dedicated scholarship portal,
                  where we empower diploma students with access to 100%
                  scholarship opportunities.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Pursuing a diploma program at Global Academia opens doors to
                  an array of 100% Scholarships designed to support your
                  educational journey.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our commitment to educational excellence extends to providing
                  financial aid through Scholarships to deserving diploma
                  students.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Discover a range of 100% Scholarship options tailored to meet
                  the diverse needs of our diploma programs, whether you're
                  aiming for a career in technology, healthcare, or the arts.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  At Global Academia, we believe that financial constraints
                  should never hinder a student's pursuit of knowledge. That's
                  why we offer scholarships to ease the financial burden of your
                  diploma studies
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>

                <p>
                  Join the ranks of our successful scholarship recipients who
                  have gone on to make meaningful contributions in their fields.
                  Discover how Global Academia can empower you to turn your
                  educational aspirations into reality through our scholarship
                  programs.
                </p>
              </div>
            </div>
          </div>
          {/* image traverl  */}
          <div className="">
            <img
              src={sholarship3}
              className="md:h-[490px] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>

        {/* scholarship Facilities  */}
        <div className="py-20">
          <h1 className="md:text-3xl text-2xl font-bold">
            Scholarship Facilities for Diploma Students
          </h1>
          <div className="pt-7 space-y-3 text-lg font-medium">
            {/* Tuition Fees  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>100% Tuition Fees Free</p>
            </div>
            {/* Monthly Stipend  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>Monthly Stipend RMB 600 - RMB 700</p>
            </div>
            {/* Hostel Fees  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>Hostel Fees Free</p>
            </div>

            {/* Accommodation Fees  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p> Accommodation Fees Free</p>
            </div>
            {/*  Job Opportunity  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>Job Opportunity</p>
            </div>
            {/* InternShip Facilities  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>Internship Facilities</p>
            </div>
            {/* Top Class University  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>Top Class Collage</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiplomaScholarship
