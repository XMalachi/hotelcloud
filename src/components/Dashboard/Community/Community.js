import React from 'react'
import TopFourCustomer from './TopFourCustomer'
import Twitter from './Twitter'
import Weather from './Weather'
import styles from './Community.module.css'
import TopFourMostOrderedRooms from './TopFourMostOrderedRooms'
import Calender from './Calendar'


function Community() {
  return (
    <div className={styles.communityContainer}>
      <div className={styles.twitterCommunity}>
        <Twitter />
      </div>
      
      <div className={styles.weatherCommunity}>
        <Weather />
      </div>

      <div className={styles.topFourCommunity}>
        <TopFourCustomer />
      </div>

      <div className={styles.topFourrooms}>
        <TopFourMostOrderedRooms />
      </div>

      <div className={styles.calender}>
        <Calender />
      </div>
    </div>
  )
}

export default Community