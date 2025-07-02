import React from 'react'
import { PiGraduationCap } from 'react-icons/pi'
import v1 from '../../../assets/image/varsity1.avif'
import v2 from '../../../assets/image/versity2.avif'
import v3 from '../../../assets/image/varsity3.jpg'
import v4 from '../../../assets/image/varsity4.avif'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutVarsity = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="container px-6 py-10">
        {/* About All University title  */}

        <div>
          <h1 className="md:text-3xl text-2xl text-center font-bold tet text-[#000]">
            About All China University
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">Top University</h1>
          </div>
        </div>
        {/* content university  */}
        <div className="pt-20">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="md:h-[200px] md:w-[310px] rounded-lg"
                  src={v2}
                  alt=""
                />
              </div>
              <div>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="md:h-[200px] md:w-[310px] rounded-lg"
                  src={v3}
                  alt=""
                />
              </div>
              <div>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="md:h-[200px] md:w-[310px] rounded-lg"
                  src={v4}
                  alt=""
                />
              </div>
              <div>
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="md:h-[200px] md:w-[310px] rounded-lg  "
                  src={v1}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl text-[#000] font-semibold">
                The university is a place of knowledge, growth, and endless
                possibilities.
              </h1>
              <div className="pt-6 space-y-3">
                <p>
                  Universities are institutions dedicated to the pursuit of
                  knowledge, research, and academic excellence.
                </p>
                <p>
                  They offer a wide array of undergraduate, graduate, and
                  doctoral programs spanning diverse disciplines, including arts
                  and sciences, engineering, business, and more.These
                  institutions are often hubs of innovation and research,
                  contributing to advancements in various fields such as
                  medicine, technology, and social sciences. Campus life at a
                  university can be rich and diverse, with extracurricular
                  activities, clubs, and events that contribute to personal
                  growth and development
                </p>

                <div className="flex flex-wrap items-center gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutVarsity
