import React from 'react'

import { Link } from 'react-router-dom'

const CourseCard = ({ allCourse }) => {
  const { id, name, image, sub_detail, sub_name } = allCourse
  const topFunction = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <div className="md:p-4">
        <div className="shadow-lg rounded-xl h-[490px] py-4">
          <img className="w-full h-[220px] rounded-xl" src={image} alt="" />
          <div className=" px-3">
            <div className=" py-4">
              <div className="font-bold text-lg mb-2 flex items-center w-full  justify-between">
                <h2 className="text-lg">{name}</h2>
                <h2 className="relative bottom-16 text-black bg-slate-300 px-2 py-1 rounded-lg">
                  {sub_name}
                </h2>
              </div>
              <p className="text-gray-700 text-base">{sub_detail}</p>
            </div>
            <div className="relative">
              <Link
                onClick={topFunction}
                to={`/course/${id}`}
                className="absolute cursor-pointer md:top-6 top-1 left-32 px-4 py-2 hover:bg-[#09a3f1]  bg-[#09adfe]  rounded-lg text-[15px] font-semibold text-[#ffffff] mr-2 mb-2"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard
