import React, { useContext } from 'react'
import GlobalContext from '../../Context'
import styles from './FeaturedRooms.module.css'
import {Link} from 'react-router-dom'
import { BsBoxArrowInRight } from "react-icons/bs";


const FeaturedRooms = () => {
    const {featuredRooms } = useContext(GlobalContext)
    

    
  return (
    <div className={styles.featuredRoomsGroup}>

    <h2 className={styles.header}>Our Rooms</h2>
    <hr />
    <div className={styles.featuredrooms}>
        
        {featuredRooms.length > 0 && featuredRooms.map(featuredroom => (
            <Link to={`RoomsScreen/${featuredroom.slug}`} key={featuredroom.id} >
                <div  className={styles.featuredroom}>
                    
                    <div className={styles.image}>
                        <img src={featuredroom.images[0]} alt={featuredroom.slug} />
                    </div>

                    <div className={styles.featureDecription}>
                        <div className={styles.name}>
                            <h3>{featuredroom.name}</h3>
                        </div>

                        <div className={styles.priceTag}>${featuredroom.price}&nbsp;/&nbsp;per night</div>
                        <div className={styles.checkFeaturesBtn}>FEATURES<BsBoxArrowInRight/></div>
                    </div>
                    
                </div>
            </Link>
        ))}
    </div>
            
    </div>
  )
}

export default FeaturedRooms