import React, { useContext, useState } from 'react'
import GlobalContext from '../../Context'
import styles from './HomeScreenBanner.module.css'
import {Link} from 'react-router-dom'

const Banner = () => {
    const {rooms, onChangeHandler} = useContext(GlobalContext)
    let availableTypes =   new Set(rooms.map((room) => room.type))
    availableTypes = ['Room Type','all', ...availableTypes]
    const typeOptions = availableTypes.map((option, i) => (<option key={i} value={option}>{option}</option>))

    const [state, setState] = useState(['Luxurios Rooms', 'We Put comfort in comfort',  'Just Sit Back and Relax'])
    const [text, setText] =  useState({count: 0})

    // setTimeout()
    setTimeout(()=>{
        slider()
    }, 4000)
    const slider = () => {
        setText({
            count: text.count === state.length-1 ? 0 :text.count +1 
        })
    }
    
  return (
    <div className={styles.intro} >
        <div className={styles.introContent}>
        {state.map((item, index) => (
            <div key={index} className={text.count === index ? 'slide active' : 'slide'}>
            {text.count === index && <h1>{item}<span className={styles.theme}>...</span></h1>}
            </div>
        ))}
            
            
            <hr className={styles.hr} />
            <div className={styles.introOffer}>
                <h3 className='slides'>Basic Rooms At $299</h3>
            </div>
            <Link to='/RoomsScreen'>Our Rooms</Link>
        </div>

        <form>
            <div className={styles.reservation}>
                <h3>Book a room</h3>
                <input type='date' placeholder='Date' />
                <div className={styles.checkRoomType}>
                    <select id="searchByType" className={styles.searchByType} name='type' onChange={onChangeHandler}>
                        {typeOptions}
                    </select>
                </div>
                <button className={styles.checkBtn}>Check Availability</button>
            </div>
            
        </form>
    </div>
  )
}

export default Banner