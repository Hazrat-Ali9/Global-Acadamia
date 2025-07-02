import React from 'react'
import sinchuan from '../../../assets/image/sinchuan.png'
import petroleum from '../../../assets/image/petroleum.png'
import aviation from '../../../assets/image/aviation.png'
import tiangong from '../../../assets/image/tiangong.png'
import yangzhou from '../../../assets/image/yangzhou.png'
import nanjing from '../../../assets/image/nanjing.png'
import changzhou from '../../../assets/image/changzhou.png'
import gannan from '../../../assets/image/gannan.png'

const MarquereVarsity = () => {
  return (
    <>
      <div className="gap-4 flex flex-wrap">
        {/* ----- Sichuan university -----  */}
        <div className="shadow-lg px-6 py-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40" src={sinchuan} alt="" />
          </div>
          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Sichuan university
          </h1>
        </div>

        {/* ----- Southwest Petroleum University -----  */}
        <div className="shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40 " src={petroleum} alt="" />
          </div>

          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Southwest Petroleum University
          </h1>
        </div>

        {/* ----- Civil Aviation University of China -----  */}
        <div className="shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40 " src={aviation} alt="" />
          </div>

          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Civil Aviation University of China
          </h1>
        </div>
        {/* ----- Tiangog University -----  */}
        <div className="shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40 " src={tiangong} alt="" />
          </div>

          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Tiangog University
          </h1>
        </div>
        {/* ----- Yangzhou University -----  */}
        <div className="shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40 " src={yangzhou} alt="" />
          </div>

          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Yangzhou University
          </h1>
        </div>
        {/* ----- Nanjing Tech University -----  */}
        <div className="shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40 " src={nanjing} alt="" />
          </div>

          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Nanjing Tech University
          </h1>
        </div>
        {/* ----- Changzhou University -----  */}
        <div className="shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40 " src={changzhou} alt="" />
          </div>

          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Changzhou University
          </h1>
        </div>
        {/* ----- Gannan Normal University -----  */}
        <div className="shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img className="h-40 w-40 " src={gannan} alt="" />
          </div>

          <h1 className="text-[14px] font-semibold pt-3 text-center">
            Gannan Normal University
          </h1>
        </div>
      </div>
    </>
  )
}

export default MarquereVarsity
