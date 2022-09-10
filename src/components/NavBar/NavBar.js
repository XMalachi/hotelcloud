import React from 'react'
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import { BsCloudFog2, BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className={styles.headerNav}>
        <nav>

            <Link to='/'>
                <h1 className={styles.logoGroup}>
                <BsCloudFog2 className={styles.logo} /> <span className={styles.hotel}>Hotel</span> 
                <span className={styles.cloud}>Cloud</span>
                </h1>
            </Link>

            <div className={styles.pageNavs}>
                <Link to='/'>Home</Link>
                <Link to='/RoomsScreen'>Rooms</Link>
            </div>   
          
          <div className={styles.bookingBtn}>
            <button className={styles.booking}>Book a Room</button>
            <Link to='/DashboardScreen'><BsFillPersonLinesFill  className={styles.dashboardicon} /></Link>
          </div> 
          
        </nav>

               
    </div>
  )
}

export default NavBar