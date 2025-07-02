import React from 'react'
import Banner from '../Banner/Banner'
import ChinaAbroad from '../ChinaAbroad/ChinaAbroad'
import TopUniversity from '../../Home/TopUniversity/TopUniversity'
import { Helmet } from 'react-helmet-async'
import ChooseUs from '../ChooseUs/ChooseUs'

const StudyAbroad = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | Study Abroad</title>
      </Helmet>
      <Banner />
      <ChinaAbroad />
      <TopUniversity />
      <ChooseUs />
    </>
  )
}

export default StudyAbroad
