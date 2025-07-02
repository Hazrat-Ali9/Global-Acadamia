import React, { useEffect, useState } from 'react'
import { BiSolidQuoteRight } from 'react-icons/bi'
import { PiGraduationCap } from 'react-icons/pi'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonial = () => {
  const [allStudents, setAllStudents] = useState([])
  const [profileIndex, setProfileIndex] = useState(0)

  useEffect(() => {
    fetch('students.json')
      .then(res => res.json())
      .then(data => setAllStudents(data))
    AOS.init()
  }, [])

  // Use a setTimeout to change the profile every 500 milliseconds
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setProfileIndex(prevIndex => (prevIndex + 1) % allStudents.length)
    }, 3500)

    return () => {
      clearTimeout(intervalId)
      // Clear the timeout when the component unmounts
    }
  }, [profileIndex, allStudents])

  const profile = allStudents[profileIndex]

  return (
    <>
      <div className="container px-6 py-28">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl text-center font-bold text-[#000]">
            What Our Students Says
          </h1>
          <div className="flex justify-center pt-2 items-center gap-2">
            <PiGraduationCap size={25} className="text-[#09adfe]" />
            <h1 className="text-xl font-bold text-[#09adfe]">Testimonial</h1>
          </div>
        </div>
        {/* <h1>{profile?.name}</h1> */}

        <div className="pt-20 grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* sudent 1  */}
          <div className="shadow-lg h-[450px] rounded-lg cursor-pointer bg-[#E8E8E8] hover:bg-[#ffffff] text-[#000] py-3 px-4">
            <div className="">
              <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
            </div>
            <div>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <img
                    src={profile?.image1}
                    alt=""
                    className="bg-white w-32 h-32 rounded-full flex items-center justify-center"
                  />
                </div>
              </div>
              <div className="text-center py-4">
                <h1 className="text-2xl font-semibold">{profile?.name1}</h1>
                {/* <h1>{profile.name}</h1> */}
                <p className="text-xl font-semibold">{profile?.varsity1}</p>
              </div>
            </div>
            <div className="pb-4">
              <p className="">{profile?.des1}</p>
            </div>
          </div>
          {/* sudent 2  */}
          <div className="shadow-lg h-[450px] rounded-lg cursor-pointer bg-[#E8E8E8] hover:bg-[#ffffff] text-[#000] py-3 px-4">
            <div className="">
              <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
            </div>
            <div>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <img
                    src={profile?.image2}
                    alt=""
                    className="bg-white w-32 h-32 rounded-full flex items-center justify-center"
                  />
                </div>
              </div>
              <div className="text-center py-4">
                <h1 className="text-2xl font-semibold">{profile?.name2}</h1>
                {/* <h1>{profile.name}</h1> */}
                <p className="text-xl font-semibold">{profile?.varsity2}</p>
              </div>
            </div>
            <div className="pb-4">
              <p className="">{profile?.des2}</p>
            </div>
          </div>
          {/* sudent 3  */}
          <div className="shadow-lg h-[450px] rounded-lg cursor-pointer bg-[#E8E8E8] hover:bg-[#ffffff] text-[#000] py-3 px-4">
            <div className="">
              <BiSolidQuoteRight className="text-[#09adfe] " size={40} />
            </div>
            <div>
              <div className="flex items-center justify-center pt-3">
                <div>
                  <img
                    src={profile?.image3}
                    alt=""
                    className="bg-white w-32 h-32 rounded-full flex items-center justify-center"
                  />
                </div>
              </div>
              <div className="text-center py-4">
                <h1 className="text-2xl font-semibold">{profile?.name3}</h1>
                {/* <h1>{profile.name}</h1> */}
                <p className="text-xl font-semibold">{profile?.varsity3}</p>
              </div>
            </div>
            <div className="pb-4">
              <p className="">{profile?.des3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
