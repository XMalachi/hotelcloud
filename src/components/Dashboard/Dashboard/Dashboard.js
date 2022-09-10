import React from 'react'
import styles from './Dashboard.module.css'
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'
import DashboardQuickSearch from '../DashboardQuickSearch/DashboardQuickSearch'
import Reservations from '../Reservations/Reservations'
// import CompaignOverview from '../../CampaignOverview/CompaignOverview'
import BookingList from '../../BookingList/BookingList'
import Community from '../Community/Community'
import Footer from '../../Footer/Footer'


function Dashboard() {
  return (
    <div className={styles.sidebar} >
      <DashboardNavBar />
      <DashboardSidebar />
      <div className={styles.main} >
      
        <DashboardQuickSearch />
          <Reservations />
             
        
        <BookingList />

        <Community />

        <Footer />

      </div>
    </div>
    
  )
}

export default Dashboard