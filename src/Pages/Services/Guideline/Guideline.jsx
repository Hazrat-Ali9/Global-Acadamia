import React from 'react'
import { PiGraduationCap } from 'react-icons/pi'
import { RiGuideLine } from 'react-icons/ri'
import gideline from '../../../assets/image/gideline2.avif'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Guideline = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="container px-6 md:py-24 py-8">
        {/*   Guideline For Students title*/}

        <div
          ata-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="md:text-3xl text-2xl text-center font-bold tet text-[#000]">
            Guideline For Students
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">
              Guideline
            </h1>
          </div>
        </div>
        {/* Guideline For Students section  */}
        <div className="md:pt-16 pt-8 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <h1 className="text-2xl text-[#09adfe] font-semibold">
              Guideline / Counseling:
            </h1>
            <div className="space-y-2 pt-3">
              <div className="flex gap-3">
                <span className="pt-1">
                  <RiGuideLine className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our comprehensive student guidelines offer a roadmap to
                  success, providing valuable advice and resources to help you
                  navigate your academic journey with confidence.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <RiGuideLine className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  From time management strategies to study tips, we equip you
                  with practical skills and insights to excel in your coursework
                  and achieve your educational goals.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <RiGuideLine className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  We understand the challenges students face, which is why our
                  guidelines cover various aspects of student life, including
                  stress management, career planning, and maintaining a healthy
                  work-life balance.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <RiGuideLine className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  {/* Whether you're a high school student preparing for college or
                  a graduate student pursuing advanced degrees, our guidelines
                  are designed to empower learners at every stage of their
                  education */}
                  With our guidance, you'll gain valuable advice on
                  cross-cultural communication, time management, and effective
                  study habits, empowering you to excel academically and
                  personally.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <RiGuideLine className="text-[#09adfe]" size={20} />
                </span>

                <p>
                  Trust in our expertise to enhance your global academic
                  experience, making it not just about earning a degree, but
                  also about gaining a broader perspective and lifelong skills
                  for success."
                </p>
              </div>
            </div>
          </div>
          {/* image  */}
          <div>
            <img
              data-aos="flip-up"
              data-aos-duration="1500"
              src={gideline}
              className="md:h-[430px] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Guideline
