import React from 'react'
import Logo from '../../components/header/Logo'
import NavBar from '../../components/header/NavBar'
import IgniteText from '../../components/Ignite-texts/IgniteText'
import Boy from '../../components/Banner/Boy'
import EdvantureDetails from '../../components/Details/EdvantureDetails'
import OurServices from '../../components/our-services/OurServices'
import Scholarship from '../../components/our-scholar/Scholarship'

function Home() {
  return (
    <>
    <div className="">
      <div className="flex items-center justify-between mx-6 pt-3  w- h-24">
        <Logo/>
        <NavBar/>
        </div>
        <div className="flex">
          <IgniteText/>
          <Boy/>
        </div>
        <EdvantureDetails/>
        <OurServices/>
        <Scholarship/>
    </div>
    </>
  )
}

export default Home
