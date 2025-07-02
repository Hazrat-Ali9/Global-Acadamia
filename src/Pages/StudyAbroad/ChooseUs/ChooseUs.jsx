import React from 'react'
import { useEffect } from 'react'
import { BiSolidQuoteRight } from 'react-icons/bi'
import { BsStopwatch } from 'react-icons/bs'
import { IoMdCloseCircle } from 'react-icons/io'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PiGraduationCap } from 'react-icons/pi'
import { FaChalkboardTeacher } from 'react-icons/fa'

const ChooseUs = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="py-28 container px-6">
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl text-center text-[#000] font-bold">
            Why Choose Us ?
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">Choose Us</h1>
          </div>
        </div>
        <div className="pt-20 grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* Choose 1  */}
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-lg  rounded-lg cursor-pointer bg-[#000] transition duration-300 delay-150 hover:delay-100 hover:bg-[#09adfe]  text-[#ffffff] py-3 px-5"
          >
            <div>
              <div className="flex items-center justify-center pt-8">
                <div>
                  <div className="flex items-center justify-center">
                    <BsStopwatch size={70} />
                  </div>
                </div>
              </div>
              <div className="text-center py-4 pt-14">
                <h1 className="text-2xl font-semibold text-pink-600">
                  24 / 7 Service for All Time
                </h1>

                <p className="py-4">
                  At Global Academia, we are dedicated to providing our
                  customers with 24/7 service for all time. We're committed to
                  ensuring that STUDENTS receive a one-stop solution for their
                  education needs. Ensuring your Academia journey is as smooth
                  as possible.STUDENTS can access a comprehensive range of
                  services through our platform, from finding their desired
                  institution to seamless admission procedures, visa processing,
                  and even convenient airport pick-up, simplifying their entire
                  academic journey.Whether you have questions, need product
                  information, or encounter any issues, our customer support
                  team is here to assist you day or night, making your Academia
                  experience seamless.
                </p>
              </div>
            </div>
          </div>
          {/* Choose 2  */}
          <div
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-lg  rounded-lg cursor-pointer bg-[#000] transition duration-300 delay-150 hover:delay-100 hover:bg-[#09adfe]  text-[#ffffff] py-3 px-5"
          >
            <div>
              <div className="flex items-center justify-center pt-8">
                <div>
                  <div className="flex items-center justify-center">
                    <IoMdCloseCircle size={70} />
                  </div>
                </div>
              </div>
              <div className="text-center py-4 pt-14">
                <h1 className="text-2xl font-semibold text-pink-600">
                  No Secret Fees
                </h1>

                <p className="py-4">
                  At Global Academia, we believe in complete transparency.
                  That's why we proudly declare: 'No Secret Fees.' When you
                  choose our services, you can trust that what you see is what
                  you get, with no hidden charges waiting to surprise you. "We
                  understand the importance of financial clarity for students
                  and their families. That's why we ensure there are 'No Secret
                  Fees' in any aspect of our service. We're committed to
                  straightforward, honest pricing.We're dedicated to providing a
                  straightforward and trustworthy experience to help you achieve
                  your higher education goals without any hidden costs
                </p>
              </div>
            </div>
          </div>
          {/* Choose 3  */}
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-lg  rounded-lg cursor-pointer bg-[#000] transition duration-300 delay-150 hover:delay-100 hover:bg-[#09adfe]  text-[#ffffff] py-3 px-5"
          >
            <div>
              <div className="flex items-center justify-center pt-8">
                <div>
                  <div className="flex items-center justify-center">
                    <FaChalkboardTeacher size={70} />
                  </div>
                </div>
              </div>
              <div className="text-center py-4 pt-14">
                <h1 className="text-2xl font-semibold text-pink-600">
                  Achieve Your Dreams with Confidence
                </h1>
                {/* <h1>{profile.name}</h1> */}
                <p className="py-4">
                  At Global Academia, we're here to help you achieve your dreams
                  with confidence. Our dedicated team supports your journey
                  toward higher education, ensuring a bright future.Confidence
                  is the key to unlocking your dreams, and at Global Academia,
                  we provide the guidance and resources to make it happen. Your
                  aspirations are within reach with us.With Global Academia by
                  your side, you can confidently pursue your educational dreams.
                  We offer a range of services to empower you on your path to
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseUs
