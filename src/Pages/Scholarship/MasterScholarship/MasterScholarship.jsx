import React from 'react'
import sholarship4 from '../../../assets/image/scholarship4.avif'
import { PiGraduationCap } from 'react-icons/pi'
import { FaCentos } from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MasterScholarship = () => {
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
            Scholarship for Master Students
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
              Finding the Right Master's Scholarships:
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
                  Utilize scholarship search engines and online resources.
                  Websites and databases like ours at GlobalAcademia can help
                  you find relevant scholarships and streamline your application
                  process
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
                  Start your search early. Many scholarships have specific
                  application deadlines, so it's essential to plan ahead and
                  give yourself ample time to research and prepare.
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
                  Consider your field of study and career goals. Some
                  scholarships are tailored to specific academic disciplines or
                  career paths, so aligning your goals with scholarship
                  opportunities can increase your chances of success
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

          {/* image traverl  */}
          <div className="">
            <img
              data-aos="flip-down"
              data-aos-duration="1500"
              src={sholarship4}
              className="md:h-[490px] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>

        {/* scholarship Facilities  */}
        <div className="py-20">
          <h1 className="md:text-3xl text-2xl font-bold">
            Scholarship Support for Master Students
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
            {/* Monthly Stipend */}
            <div className="flex gap-3 ">
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="pt-1"
              >
                <FaCentos className="text-[#09adfe]" size={20} />
              </span>
              <p>Monthly Stipend RMB 2000 - RMB 3000</p>
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

export default MasterScholarship
