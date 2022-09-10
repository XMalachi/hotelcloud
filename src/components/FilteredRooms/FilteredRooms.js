import React, { useContext } from 'react'
import GlobalContext from '../../Context'
import {Link} from 'react-router-dom'
import styles from './FilteredRooms.module.css'
import { BsBoxArrowInRight } from "react-icons/bs";


const FilteredRooms = () => {
    const {rooms, featuredRooms, filteredRooms } =  useContext(GlobalContext)
    // console.log('room featured', featuredRooms)

    console.log('room filtered', filteredRooms)

  return (
    <div>
        <div className={styles.rooms}>
        
        {rooms.length > 0 && filteredRooms.map(room => (
            <Link to={`RoomsScreen/${room.slug}`} key={room.id} >
                <div className={styles.room}>
                    <div className={styles.image}>
                        <img src={room.images[0]} alt={room.slug} />
                    </div>

                    <div className={styles.featureDecription}> 
                        <div className={styles.name}>
                            <h3>{room.name}</h3>
                        </div>

                        <div className={styles.priceTag}>${room.price}&nbsp;/&nbsp;per night</div>
                        <div className={styles.checkFeaturesBtn}>FEATURES<BsBoxArrowInRight/></div>
                    </div>


                    
                </div>
            </Link>
        ))}

    </div>
    </div>
  )
}

export default FilteredRooms