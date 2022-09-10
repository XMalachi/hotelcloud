import React from 'react'
import styles from './DashboardNavBar.module.css'
import { FaHome } from "react-icons/fa";
import { BsBell, BsInfoCircle, BsChevronDown,  BsListUl } from "react-icons/bs";
import imgthree from '../../../images/galleryThree.jpg'
import { Link } from 'react-router-dom';

function DashboardNavBar() {
  return (
    <div className={styles.dashboardnavbarContainer}>
        
        
        <div className={styles.left}>
            <span>
                <BsListUl  className={styles.dashboardtogglebtn} />
            </span>
            <Link to='/' >
                <FaHome className={styles.dashboardhomebtn} />
            </Link>
        </div>   

            

        <div className={styles.right}>
            <span>
                <BsBell />
            </span>
            
            <span>
                <BsInfoCircle />
            </span>

            <span className={styles.admin}>
                <span>John Doe</span>
                <span><img src={imgthree} alt='Admin' width='30px' height='30px' /></span>
            </span>
            <span>
                <BsChevronDown />
            </span>
        </div>

    </div>
  )
}

export default DashboardNavBar