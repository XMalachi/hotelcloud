import React, { useContext } from 'react'
import GlobalContext from '../../../Context'
import styles from './TopFourMostOrderedRooms.module.css'
import {Link} from 'react-router-dom'
import { BsBoxArrowInRight } from "react-icons/bs";

function TopFourMostOrderedRooms() {
    const {featuredRooms } = useContext(GlobalContext)
    

    
  return (
    <div className={styles.topfourRoomsGroup}>

    <h3 className={styles.topfourheader}>Our Top Three Most Ordered Rooms</h3>
    <hr />
    <div className={styles.topFourRooms}>
        
        {featuredRooms.length > 0 && featuredRooms.map(featuredroom => (
            <Link to={`RoomsScreen/${featuredroom.slug}`} key={featuredroom.id} >
                <div  className={styles.topFourRoom}>
                    
                    <div className={styles.topFourImage}>
                        <img src={featuredroom.images[0]} alt={featuredroom.slug} />
                    </div>

                    <div className={styles.topFourDecription}>
                        <div className={styles.topFourName}>
                            <h3>{featuredroom.name}</h3>
                        </div>

                        <div className={styles.topFourPriceTag}>${featuredroom.price}&nbsp;/&nbsp;per night</div>
                        <div className={styles.checkTopFourBtn}>FEATURES<BsBoxArrowInRight/></div>
                    </div>
                    
                </div>
            </Link>
        ))}
    </div>
            
    </div>
  )
}

export default TopFourMostOrderedRooms