import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { PiGraduationCap } from 'react-icons/pi'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MscCourse.css'
import CourseCard from '../../../components/homePage/CourseCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BscCourse = () => {
  // render()
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <AiOutlineArrowRight className="text-black text-[30px]" />,
    prevArrow: <AiOutlineArrowLeft className="text-black text-[30px]" />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [courses, setCourses] = useState([])

  const mscCourses = courses.filter(course => course.category === 'master')

  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
    AOS.init()
  }, [])
  return (
    <div className="trandingSlider container px-6 pt-28 pb-10">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="mb-10"
      >
        <h1 className="text-3xl text-center font-bold">Master Programs</h1>
        <div className="flex pt-2 items-center justify-center gap-2">
          <PiGraduationCap size={25} className="text-[#09adfe]" />
          <h1 className="text-xl font-bold text-[#09adfe]"> Our Courses</h1>
        </div>
      </div>
      <Slider {...settings}>
        {mscCourses.map(allCourse => (
          <CourseCard key={allCourse.id} allCourse={allCourse}></CourseCard>
        ))}
      </Slider>
    </div>
  )
}

export default BscCourse
