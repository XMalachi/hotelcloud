import React from 'react'
import Banner from '../../HomeScreenBanner/HomeScreenBanner'
import Services from '../../Services/Services'
import FeaturedRooms from '../../FeaturedRooms/FeaturedRooms'
import Layout from '../../Layout/Layout'


const HomeScreen = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Services />
        <FeaturedRooms />
      </Layout>
        
    </div>
  )
}

export default HomeScreen