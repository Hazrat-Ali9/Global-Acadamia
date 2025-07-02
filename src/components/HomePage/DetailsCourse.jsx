import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import bannerCourse from '../../assets/image/courseBanner.jpg'
import { AiTwotonePhone } from 'react-icons/ai'
import { PiGraduationCap } from 'react-icons/pi'

const DetailsCourse = () => {
  const courseDetails = useLoaderData()
  let { courseId } = useParams()
  const [course, setCourse] = useState([])
  console.log('courseDetails', courseDetails)

  useEffect(() => {
    const courseData = courseDetails.find(
      courseDetail => courseDetail.id == courseId
    )
    console.log('courseData', courseData)
    setCourse(courseData)
  }, [])

  return (
    <>
      <div className="py-[70px] ">
        <div className="">
          <img className="w-full h-[300px]" src={bannerCourse} alt="" />
          <div className="relative bottom-40  text-[#ffffff] md:pl-[540px] pl-6">
            <div className="flex gap-4 items-center">
              <h1 className="uppercase text-3xl font-bold">
                {course?.category}
              </h1>
              <span className="text-3xl font-bold">/</span>
              <h1 className="uppercase text-3xl font-bold">
                {course?.sub_name}
              </h1>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div className="bg-[#09adfe] h-10 w-10 rounded-full flex justify-center items-center">
                <AiTwotonePhone className="" size={25} />
              </div>
              <div className="text-[16px] font-medium">
                <p>+88 0179-3636735</p>
              </div>
            </div>
          </div>
          <div className="px-6">
            <div className="flex bg-[#09adfe] font-semibold text-[#ffffff] text-[16px] py-2 px-5 rounded-lg w-44">
              <Link to="/">Home/</Link>
              <h1 className="uppercase">{course?.category}</h1>
            </div>
          </div>
        </div>

        <div className="container px-6 py-10">
          <div className="flex gap-16 flex-wrap">
            <div className="">
              <img
                className="md:h-[500px] md:w-[600px]"
                src={course?.image}
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-2xl text-[#09adfe] font-bold">
                No Need IELTS
              </h1>

              <div className="py-8 ">
                <div className="py-3 text-[#09adfe] text-xl font-semibold flex items-center gap-2">
                  <PiGraduationCap size={25} className="text-[#09adfe]" />
                  <span> Study Plan: </span>
                  <span className="uppercase">{course?.category}</span> /
                  <span>{course?.sub_name}</span>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-[#ffffff] uppercase bg-[#09adfe]">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Course name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Course Duration
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                          Category
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {course?.name}
                        </th>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {course?.course_length}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-1 shadow-lg px-4 pb-6 rounded-lg">
                <h1 className="py-4 text-xl text-[#09adfe] font-semibold">
                  Some Documents You Need
                </h1>
                <h3>1. {course?.document1}</h3>
                <h3>2. {course?.document2}</h3>
                <h3>3. {course?.document3}</h3>
                <h3>4. {course?.document4}</h3>
                <h3>5. {course?.document5}</h3>
                <h3>6. {course?.document6}</h3>
                <h3>7. {course?.document7}</h3>
              </div>
            </div>
          </div>

          {/* ------Course Overview-----  */}
          <div className="pt-12">
            <h1 className="text-3xl font-bold text-[#09adfe]">
              Course Overview
            </h1>
            <p className="pt-4 md:w-3/4">{course?.details}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsCourse
