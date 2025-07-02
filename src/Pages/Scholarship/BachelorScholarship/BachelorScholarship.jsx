import React from 'react'
import sholarship2 from '../../../assets/image/scholarship2.avif'
import { PiGraduationCap } from 'react-icons/pi'
import { FaCentos } from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BachelorScholarship = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="container px-6 md:pt-6 ">
        {/*         Travel Support for Students  title*/}

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="md:text-3xl text-2xl text-center font-bold tet text-[#000]">
            Scholarship for Bachelor Students
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
          {/* image traverl  */}
          <div className="">
            <img
              data-aos="flip-down"
              data-aos-duration="1500"
              src={sholarship2}
              className="md:h-[490px] w-full rounded-lg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl text-[#09adfe] font-semibold">
              Bachelor's Degree Scholarships Hub:
            </h1>
            <div className="space-y-2 pt-3">
              <div className="flex gap-3">
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="pt-1"
                >
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Welcome to Global Academia's prestigious 100% Scholarship
                  program, designed to empower and support bachelor's degree
                  students on their educational journey.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="pt-1"
                >
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Pursuing a bachelor's degree at Global Academia opens doors to
                  a world of scholarship opportunities aimed at easing the
                  financial burden of higher education.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="pt-1"
                >
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  By offering scholarships, mentorship opportunities, and access
                  to a diverse network of professionals, Global Academia equips
                  bachelor's degree students with the tools they need to thrive
                  academically and professionally.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="pt-1"
                >
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Explore the numerous scholarship opportunities available at
                  Global Academia and take the first step toward a brighter
                  future, where your academic aspirations are fully supported
                  and nurtured.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="pt-1"
                >
                  <PiGraduationCap className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our scholarship programs go beyond financial support; they
                  offer a platform for personal and professional development,
                  connecting you with mentors and opportunities for growth.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="pt-1"
                >
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
        </div>

        {/* scholarship Facilities  */}
        <div className="py-20">
          <h1 className="md:text-3xl text-2xl font-bold">
            Scholarship Support for Bachelor Students
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
            {/* Job Opportunity */}
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
            {/* World Ranking  University  */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>World Ranking University</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BachelorScholarship
