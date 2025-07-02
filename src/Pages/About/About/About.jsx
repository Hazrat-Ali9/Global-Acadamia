import React from 'react'
import AboutBanner from '../AboutBanner/AboutBanner'
import AboutVarsity from '../AboutVarsity/AboutVarsity'
import AScholarship from '../AScholarship/AScholarship'
import CampusTour from '../CampusTour/CampusTour'
import TopUniversity from '../../Home/TopUniversity/TopUniversity'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | About</title>
      </Helmet>
      <AboutBanner />
      <AboutVarsity />
      <AScholarship />
      <CampusTour />
      <TopUniversity />
    </>
  )
}

export default About
