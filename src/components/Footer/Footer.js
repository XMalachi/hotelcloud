import React from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'
import { BsCloudFog2 } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav>
        
        <Link to='/'>
            <h1 className={styles.logoGroup}>
            <BsCloudFog2 className={styles.logo} /> <span className={styles.footerhotel}>Hotel</span> 
            <span className={styles.cloud}>Cloud</span>
            </h1>
        </Link>

        <div className={styles.navs}>
            <Link to='/'>Home</Link>
            <Link to='/RoomsScreen'>Rooms</Link>
        </div> 

        <div className={styles.tradeMark}>
          <h3>&copy;2022 BeachResort</h3>
        </div>  
    </nav>    
    </div>
  )
}

export default Footer