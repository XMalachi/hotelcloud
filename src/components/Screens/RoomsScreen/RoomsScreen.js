import React from 'react'
import RoomsScreenBanner from '../../RoomsScreenBanner/RoomsScreenBanner'
import SearchRooms from '../../SearchRooms/SearchRooms'
import FilteredRooms from '../../FilteredRooms/FilteredRooms'
import styles from './RoomsScreen.module.css'
import Layout from '../../Layout/Layout'

const RoomsScreen = () => {
  return (
    <div className={styles.roomsScreen}>
    <Layout>
        <RoomsScreenBanner />
        <SearchRooms />
        <FilteredRooms />
    </Layout>
        
    </div>
  )
}

export default RoomsScreen