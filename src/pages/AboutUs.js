
import LandingAbout from '../component/LandingAbout'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Fragment } from 'react'
import TestImonial from '../component/TestImonial'
import Countup from '../component/Countup'
import TeamWork from '../component/TeamWork'
import Clients from '../component/Clients'

const AboutUs = () => {
  return (
    <Fragment>
    <Header/>
    <LandingAbout/>
    <TestImonial/>
    <Countup/>
    <TeamWork/>
    <Clients/>
    <Footer/>
    </Fragment>
  )
}

export default AboutUs