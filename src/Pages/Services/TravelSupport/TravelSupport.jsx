// export default TravelSupport
import React from 'react'
import { FaPlane } from 'react-icons/fa'
import travel from '../../../assets/image/travel3.avif'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const VisaProcess = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div className="container px-6 md:pt-28 pt-8">
        {/*         Travel Support for Students  title*/}

        <div>
          <h1 className="md:text-3xl text-xl text-center font-bold tet text-[#000]">
            Travel Support for Students
          </h1>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            className="flex pt-2 items-center justify-center gap-2"
          >
            <FaPlane size={25} className="text-[#09adfe]" />
            <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">
              Travel
            </h1>
          </div>
        </div>
        {/*      Travel Support for Students section  */}
        <div className="md:pt-16 pt-8 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <h1 className="text-2xl text-[#09adfe] font-semibold">
              Travel Support:
            </h1>
            <div className="space-y-2 pt-3">
              <div className="flex gap-3">
                <span
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className="pt-1"
                >
                  <FaPlane className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our comprehensive travel support services are designed
                  specifically for students, offering guidance and solutions to
                  make your study abroad journey seamless and stress-free.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className="pt-1"
                >
                  <FaPlane className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Our dedicated student-focused travel support services are your
                  gateway to a successful international academic journey. We
                  offer a one-stop solution for all your travel needs.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className="pt-1"
                >
                  <FaPlane className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  From visa assistance to accommodation arrangements, our
                  experienced team is here to provide personalized support
                  tailored to your unique needs and preferences.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className="pt-1"
                >
                  <FaPlane className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  We understand the importance of budgeting for students, and
                  our services are cost-effective, ensuring you get the most
                  value out of your international education experience.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className="pt-1"
                >
                  <FaPlane className="text-[#09adfe]" size={20} />
                </span>
                <p>
                  Whether you need help with visa applications, pre-departure
                  orientations, or cultural integration, we're your trusted
                  partner throughout your academic adventure.
                </p>
              </div>
              <div className="flex gap-3">
                <span
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  className="pt-1"
                >
                  <FaPlane className="text-[#09adfe]" size={20} />
                </span>

                <p>
                  Let us handle the logistics while you focus on your studies
                  and making unforgettable memories during your time abroad."
                </p>
              </div>
            </div>
          </div>
          {/* image traverl  */}
          <div className="flex">
            <img src={travel} className=" rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default VisaProcess
