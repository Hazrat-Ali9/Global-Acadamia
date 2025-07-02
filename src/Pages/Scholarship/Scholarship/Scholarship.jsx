import React from 'react'
import Banner from '../Banner/Banner'
import DiplomaScholarship from '../DiplomaScholarship/DiplomaScholarship'
import BachelorScholarship from '../BachelorScholarship/BachelorScholarship'
import AScholarship from '../../About/AScholarship/AScholarship'
import TopUniversity from '../../Home/TopUniversity/TopUniversity'
import MasterScholarship from '../MasterScholarship/MasterScholarship'
import { Helmet } from 'react-helmet-async'

const Scholarship = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | Scholarship</title>
      </Helmet>
      <Banner />
      <DiplomaScholarship />
      <AScholarship />
      <BachelorScholarship />
      <TopUniversity />
      <MasterScholarship />
    </>
  )
}

export default Scholarship
