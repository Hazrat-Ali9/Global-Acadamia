import React from 'react'
import { FaRegShareSquare } from 'react-icons/fa'
import chinaAbroad1 from '../../../assets/image/chinaAbroad2.jpg'
import { PiGraduationCap } from 'react-icons/pi'

const ChinaAbroad = () => {
  return (
    <>
      <div className="container px-6 md:py-16 pt-8">
        {/*         Travel Support for Students  title*/}

        <div>
          <h1 className="md:text-3xl text-2xl text-center font-bold tet text-[#000]">
            Explore Education in China
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">
              China
            </h1>
          </div>
        </div>
        {/*      Travel Support for Students section  */}
        <div className="md:pt-16 pt-8 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <h1 className="text-2xl text-[#09adfe] font-semibold">
              China Educational Insights:
            </h1>
            <div className="space-y-2 pt-3">
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaRegShareSquare className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  At Global Academia, we are your trusted partner in pursuing an
                  education in China, offering a world-class academic experience
                  tailored to your global aspirations.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaRegShareSquare className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our platform serves as a comprehensive guide, providing
                  prospective students with valuable information on
                  universities, programs, scholarships, and the cultural
                  richness that China has to offer.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaRegShareSquare className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  From visa assistance to accommodation arrangements, our
                  experienced team is here to provide personalized support
                  tailored to your unique needs and preferences.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaRegShareSquare className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Explore China's diverse educational landscape, from
                  cutting-edge technology programs to profound studies in
                  culture and history, all while immersing yourself in a unique
                  and vibrant cultural experience.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaRegShareSquare className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  We understand the importance of a smooth transition to life in
                  China, and our resources cover everything from visa
                  applications to accommodation options and cultural adaptation
                  tips.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaRegShareSquare className="text-[#09adfe]" size={20} />
                </span>

                <p>
                  Join us at Global Academia as we empower you to unlock the
                  countless opportunities that studying in China can offer,
                  shaping your future with a truly international education.
                </p>
              </div>
            </div>
          </div>
          {/* image traverl  */}
          <div className="">
            <img
              src={chinaAbroad1}
              className="md:h-[490px] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChinaAbroad
