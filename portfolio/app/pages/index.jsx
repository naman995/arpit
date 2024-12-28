import React from 'react'
import Navbar from '../components/common/navbar'
import Herosection from '../components/layout/herosection'
import Brands from '../components/layout/brands'
import Quality from "../components/layout/quality";

const Index = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Brands/>
        <Quality/>
    </div>
  )
}

export default Index