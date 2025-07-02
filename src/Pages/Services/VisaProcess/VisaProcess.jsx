import React from 'react'
import { PiGraduationCap } from 'react-icons/pi'
import { FaSith } from 'react-icons/fa'
import visa from '../../../assets/image/visa.avif'

const VisaProcess = () => {
  return (
    <>
      <div className="container px-6 md:pt-10 pt-2">
        {/*    Visa Processing Convenience  title*/}

        <div>
          <h1 className="md:text-3xl text-2xl text-center font-bold tet text-[#000]">
            Visa Processing Convenience
          </h1>
          <div className="flex pt-2 items-center justify-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">
              100% Visa
            </h1>
          </div>
        </div>
        {/* Visa Processing Convenience section  */}
        <div className="md:pt-16 pt-8 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <img src={visa} className="md:h-[380px] w-full rounded-lg" alt="" />
          </div>
          <div>
            <h1 className="text-2xl text-[#09adfe] font-semibold">
              Visa Processing:
            </h1>
            <div className="space-y-2 pt-3">
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaSith className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our streamlined visa processing services ensure a hassle-free
                  and efficient experience for travelers, saving you time and
                  stress during your application process.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaSith className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  With our user-friendly online platform, you can easily submit
                  your visa application and required documents from the comfort
                  of your home, eliminating the need for time-consuming visits
                  to embassies or consulates.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaSith className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our team of experienced professionals is dedicated to
                  providing expert guidance and support at every step of the
                  visa application journey, ensuring accuracy and compliance
                  with all requirements.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaSith className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  We offer a variety of convenient payment options and
                  transparent pricing, allowing you to budget for your visa
                  application with ease.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="pt-1">
                  <FaSith className="text-[#09adfe]" size={20} />
                </span>

                <p>
                  Trust us to handle the complexities of visa processing, so you
                  can focus on planning your trip and enjoying your travels
                  without the stress of paperwork and bureaucracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisaProcess
