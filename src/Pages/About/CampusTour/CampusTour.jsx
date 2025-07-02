import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai'
import { PiGraduationCap } from 'react-icons/pi'
import tour3 from '../../../assets/image/tour3.avif'
import tour1 from '../../../assets/image/versity2.avif'
import tour2 from '../../../assets/image/varsity1.avif'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CampusTour = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="container px-6 py-20">
        <h1 className="text-3xl font-bold text-[#000] text-center">
          Campus Tour
        </h1>
        <div className="flex pt-2 items-center justify-center gap-2">
          <PiGraduationCap size={25} className="text-[#09adfe]" />
          <h1 className="text-xl font-bold text-[#09adfe]">Tour</h1>
        </div>

        <div className="pt-20 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div class="grid md:grid-rows-4 md:grid-flow-col gap-4">
            <div class="row-span-4 ">
              <img
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="h-full w-full rounded-lg"
                src={tour3}
                alt=""
              />
            </div>
            <div class="row-span-2  ">
              <img
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="h-full w-full rounded-lg"
                src={tour1}
                alt=""
              />
            </div>
            <div class="row-span-2 ">
              <img
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="h-full w-full rounded-lg"
                src={tour2}
                alt=""
              />
            </div>
          </div>
          <div className="space-y-3">
            <p>
              Our varsity campus tours offer prospective students and their
              families the opportunity to explore the heart of our academic
              community.During the tour, you'll have the chance to visit
              state-of-the-art classrooms, cutting-edge laboratories, and modern
              libraries, giving you a glimpse into the vibrant learning
              environment.
            </p>
            <p>
              Our knowledgeable tour guides will lead you through the campus,
              sharing historical anecdotes, fun facts, and insights about the
              university's culture.You'll discover a wide range of on-campus
              amenities, including recreational centers, student lounges, and
              dining options that cater to various tastes and dietary
              preferences.
            </p>
            {/* <p>
              The campus tour provides an excellent opportunity to meet current
              students and engage in conversations about their academic journeys
              and campus life experiences.You'll have the chance to explore
              residence halls, providing a firsthand look at student housing
              options and the supportive living communities available.
            </p> */}

            <div className="mt-4 ">
              <div>
                <div className="flex pt-2 items-center gap-2">
                  <PiGraduationCap size={25} className="text-[#09adfe]" />
                  <h1 className="text-2xl font-bold text-[#09adfe]">
                    Get Sholarship
                  </h1>
                </div>

                {/* -------phone------  */}
                <div className="flex items-center gap-2 mt-4 text-[#ffffff]">
                  <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                    <AiTwotonePhone className="" size={25} />
                  </div>
                  <div className="text-[16px] text-[#09adfe] font-medium">
                    <p>+88 0179-3636735</p>
                  </div>
                </div>

                <div className=" flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-xl font-bold text-[#09adfe]">
                      Diploma Programs
                    </h1>
                  </div>
                  <div className="flex  items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-xl font-bold text-[#09adfe]">
                      Bachelor Programs
                    </h1>
                  </div>
                  <div className="flex items-center  gap-2">
                    <PiGraduationCap size={25} className="text-[#09adfe]" />
                    <h1 className="text-xl font-bold text-[#09adfe]">
                      Master Programs
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CampusTour
