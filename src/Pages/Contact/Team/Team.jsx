import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { GiForwardField } from 'react-icons/gi'
import sayem from '../../../assets/image/sayemPic.jpg'
// import zamirul from '../../../assets/image/zamirul2.jpg'
import manPic1 from '../../../assets/image/man1.webp'

const Team = () => {
  // Function to disable text selection

  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="container px-6 my-24">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="md:text-3xl text-2xl text-center font-bold  text-[#000]">
          Meet Our Academic Team
        </h1>
        <div className="flex pt-2 items-center justify-center gap-2">
          <AiOutlineTeam size={25} className="text-[#09adfe]" />
          <h1 className="md:text-xl text-lg font-bold text-[#09adfe]">Team</h1>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
        {/* sudent 1  */}
        <div
          data-aos="fade-up-right"
          data-aos-duration="1500"
          className="shadow-lg w-96 h-[500px] rounded-lg cursor-pointer bg-[#ddf4f7] hover:bg-[#ffffff] text-[#000] py-3 px-4"
        >
          <div className="">
            <GiForwardField className="text-[#09adfe] " size={40} />
          </div>
          <div>
            <div className="flex items-center justify-center ">
              <div>
                <img
                  src={manPic1}
                  alt=""
                  className="bg-white w-32 h-32 rounded-full flex items-center justify-center"
                />
              </div>
            </div>
            <div className="text-center py-4">
              <h1 className="text-2xl font-semibold">Zamirul Kabir</h1>

              <p className="text-xl font-semibold text-[#09adfe]">
                Founder & CEO
              </p>
            </div>
          </div>
          <div className="pb-4">
            <p className="">
              Meet CEO the visionary leader behind Global Academia. With a deep
              passion for education and a commitment to innovation, he drive our
              mission to provide accessible, world-class education to students
              worldwide.With a remarkable track record of success and a
              deep-rooted commitment to education, he has steered our
              institution through various milestones.
            </p>
          </div>
        </div>
        {/* sudent 2  */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="1500"
          className="shadow-lg w-96 h-[500px] rounded-lg cursor-pointer bg-[#ddf4f7] hover:bg-[#ffffff] text-[#000] py-3 px-4"
        >
          <div className="">
            <GiForwardField className="text-[#09adfe] " size={40} />
          </div>
          <div>
            <div className="flex items-center justify-center ">
              <div>
                <img
                  src={sayem}
                  alt=""
                  className="bg-white w-32 h-32 rounded-full flex items-center justify-center"
                />
              </div>
            </div>
            <div className="text-center py-4">
              <h1 className="text-2xl font-semibold">夏海云</h1>

              <p className="text-xl font-semibold text-[#09adfe]">
                创始人 & 国际协调员
              </p>
            </div>
          </div>
          <div className="pb-4">
            <p className="">
              As a Founder & International Co-ordinator at Global Academia, I
              facilitate global partnerships and collaborations with
              universities and educational institutions worldwide. My role
              involves establishing and maintaining relationships to promote
              international academic exchange and cooperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
