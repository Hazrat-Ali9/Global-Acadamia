import React from 'react'
import Banner from '../Banner/Banner'
import Welcome from '../Welcome/Welcome'
import DiplomaCourse from '../DiplomaCourse/DiplomaCourse'
import BscCourse from '../BscCourse/BscCourse'
import MscCourse from '../MscCourse/MscCourse'
import TopUniversity from '../TopUniversity/TopUniversity'
import Admission from '../Admission/Admission'
import Testimonial from '../Testimonial/Testimonial'
import { Helmet } from 'react-helmet-async'
import WhyChina from '../WhyChina/WhyChina'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | Home</title>
      </Helmet>
      <Banner />
      <Welcome />
      <WhyChina />
      <DiplomaCourse />
      <BscCourse />
      <MscCourse />
      <TopUniversity />
      <Admission />
      <Testimonial />
    </>
  )
}

export default Home
