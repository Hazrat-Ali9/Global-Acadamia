import React from 'react'
import Banner from '../Banner/Banner'
import InfoContact from '../InfoContact/InfoContact'
import Team from '../Team/Team'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | Contact</title>
      </Helmet>
      <Banner />
      <InfoContact />
      <Team />
    </>
  )
}

export default Contact
