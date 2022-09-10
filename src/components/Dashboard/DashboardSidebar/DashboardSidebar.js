import React from 'react'
import styles from './DashboardSidebar.module.css'
import { BsCloudFog2, BsFillBarChartFill, BsFillChatDotsFill } from "react-icons/bs";
import { FaUsers, } from "react-icons/fa";
import {   AiFillSchedule,  } from "react-icons/ai";
import imgthree from '../../../images/galleryThree.jpg'
import {Link} from 'react-router-dom'


function DashboardSidebar() {
    return (
        <div className={styles.sidebarContainer}>

            
            <Link to='/'>
                <h1 className={styles.logoGroup}>
                <BsCloudFog2 className={styles.logo} /> <span className={styles.hotel}>Hotel</span> 
                <span className={styles.cloud}>Cloud</span>
                </h1>
            </Link>

            <div className={styles.admin}>
                <div><img src={imgthree} alt='Admin' width='50px' height='50px' /></div>
                <div>John Doe</div>
                <hr className={styles.sidebarHr}/>   
            </div>

            <div className={styles.dashboardactivities}>
                <div className={styles.checkCharts}>
                    <BsFillBarChartFill />
                </div>
                <div className={styles.bookinglist}>
                    <AiFillSchedule />
                </div>
                <div className={styles.customers}>
                    <FaUsers />
                </div>
                <div className={styles.notifications}>
                    <BsFillChatDotsFill />
                </div>
            </div>

        </div>
    )
}

export default DashboardSidebar