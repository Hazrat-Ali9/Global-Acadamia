import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
// import varsity2 from '../../../assets/image/hBanner1.jpg'
// import varsity3 from '../../../assets/image/varsity-3.jpeg'
// import varsity4 from '../../../assets/image/varsity-4.jpg'
import './Banner.css'
// import { AiTwotonePhone } from 'react-icons/ai'

const Banner = () => {
  return (
    <>
      <div className=" md:pt-[70px]">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="slide1 flex items-center md:h-[90vh] h-[45vh]">
              <div className="container md:pt-2 pt-6 text-[#ffffff]">
                <div className="md:text-5xl md:space-y-5 text-lg  pl-12 font-bold">
                  <h1> 100% Scholarship</h1>
                  <h1>Study in China</h1>
                </div>
                <div className="md:text-2xl text-lg md:space-x-4 md:pt-5 pl-12 font-bold">
                  <span>Diploma ||</span>
                  <span>Bachelor ||</span>
                  <span>Master ||</span>
                  <span>Ph.D</span>
                </div>
                <h2 className="md:text-2xl md:pt-5 text-lg pl-12 mb-3 font-bold">
                  A World of Education Awaits You
                </h2>
                {/* <p className="ml-12 w-3/6 py-4 px-2 bg-gray-600 opacity-50 font-semibold ">
                  Unlock the doors to world-class education with our exclusive
                  100% scholarship opportunities for international students to
                  study in China.Embark on a life-changing experience, explore
                  new horizons, and expand your global perspective through our
                  scholarship programs, which cover tuition fees, accommodation,
                  and more.
                </p> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2 flex items-center md:h-[90vh] h-[45vh]">
              <div className="container md:pt-2 pt-6 text-[#ffffff]">
                <div className="md:text-5xl md:space-y-5 text-lg  pl-12 font-bold">
                  <h1> 100% Scholarship</h1>
                  <h1>Study in China</h1>
                </div>
                <div className="md:text-2xl text-lg md:space-x-4 md:pt-5 pl-12 font-bold">
                  <span>Diploma ||</span>
                  <span>Bachelor ||</span>
                  <span>Master ||</span>
                  <span>Ph.D</span>
                </div>
                <h2 className="md:text-2xl md:pt-5 text-lg pl-12 mb-3 font-bold">
                  A World of Education Awaits You
                </h2>
                {/* <p className="ml-12 w-3/6 py-4 px-2 bg-gray-600 opacity-50 font-semibold ">
                  Unlock the doors to world-class education with our exclusive
                  100% scholarship opportunities for international students to
                  study in China.Embark on a life-changing experience, explore
                  new horizons, and expand your global perspective through our
                  scholarship programs, which cover tuition fees, accommodation,
                  and more.
                </p> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3 flex items-center md:h-[90vh] h-[45vh]">
              <div className="container md:pt-2 pt-6 text-[#ffffff]">
                <div className="md:text-5xl md:space-y-5 text-lg  pl-12 font-bold">
                  <h1> 100% Scholarship</h1>
                  <h1>Study in China</h1>
                </div>
                <div className="md:text-2xl text-lg md:space-x-4 md:pt-5 pl-12 font-bold">
                  <span>Diploma ||</span>
                  <span>Bachelor ||</span>
                  <span>Master ||</span>
                  <span>Ph.D</span>
                </div>
                <h2 className="md:text-2xl md:pt-5 text-lg pl-12 mb-3 font-bold">
                  A World of Education Awaits You
                </h2>
                {/* <p className="ml-12 w-3/6 py-4 px-2 bg-gray-600 opacity-50 font-semibold ">
                  Unlock the doors to world-class education with our exclusive
                  100% scholarship opportunities for international students to
                  study in China.Embark on a life-changing experience, explore
                  new horizons, and expand your global perspective through our
                  scholarship programs, which cover tuition fees, accommodation,
                  and more.
                </p> */}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Banner
