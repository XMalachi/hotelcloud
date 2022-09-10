import React from 'react'
import styles from './RoomsScreenBanner.module.css'
import {Link} from 'react-router-dom'

const RoomsScreenBanner = () => {
  return (
    <div>
        <div className={styles.intro} >
            <div className={styles.introContent}>
                <h1>Our Rooms</h1>
                <hr />
                <Link to='/'>Return Home</Link>
            </div>
        </div>

        
    </div>
    
  )
}

export default RoomsScreenBanner