import React from 'react'
import Navbar from '../components/common/navbar'
import Herosection from '../components/layout/herosection'
import Brands from '../components/layout/brands'
import Quality from "../components/layout/quality";
import Contactus from "../components/layout/contactus";
import Latestwork from "../components/layout/latestwork";

const Index = () => {
  return (
    <div >
        <Navbar/>
        <Herosection/>
        <Brands/>
        <Quality/>
        <Latestwork/>
        <Contactus/>
    </div>
  )
}

export default Index