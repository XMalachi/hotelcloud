import React, {useState} from 'react'
import styles from './Services.module.css'
import imgone from '../../images/galleryOne.jpg'
import imgtwo from '../../images/galleryTwo.jpg'
import imgthree from '../../images/galleryThree.jpg'
import imgfour from '../../images/defaultBcg123.jpg'
import imgfive from '../../images/hallwayportrait.jpg'
import imgsix from '../../images/massagelanscape.jpg'
import imgseven from '../../images/massageportrait.jpg'
import imgeight from '../../images/poolportrait.jpg'
import imgnine from '../../images/poollanscape.jpg'
import imgten from '../../images/poolportrait2.jpg'
import imgeleven from '../../images/restaurantlanscape.jpg'
import imgtwelve from '../../images/roomoneportrait.jpg'
import imgthirteen from '../../images/hallwayportrait.jpg'
import imgfourteen from '../../images/roomtwolanscape.jpg'
import imgfifteen from '../../images/roomthreelanscape.jpg'
import { FaCocktail, FaHiking } from "react-icons/fa";
import { GiBus, GiGamepadCross } from "react-icons/gi";


const Services = () => {
    const statePortrait = [imgone, imgthree, imgseven, imgeight, imgfive, imgten, imgtwelve, imgthirteen, ]
    const statePortraitTwo = [imgfour, imgtwo, imgsix, imgnine, imgeleven, imgfourteen, imgfifteen]
    const stateLandscape = [imgfour, imgtwo, imgsix, imgnine, imgeleven, imgfourteen, imgfifteen]

    // const [statePortrait, setStatePortrait] = useState()
    // const [statePortraitTwo, setStatePortraitTwo] = useState([imgeight ,imgthirteen, imgfive ,imgone,imgtwelve,imgten, imgseven,imgthree , ])
    // const [stateLandscape, setStateLandscape] = useState([imgfour, imgtwo, imgsix, imgnine, imgeleven, imgfourteen, imgfifteen])
    const [text, setText] =  useState({count: 0})
    const [pic, setPic] =  useState({read: 0})

    // setTimeout()
    setTimeout(()=>{
        slider()
        
    }, 7000)

    setTimeout(()=>{
        sliderLandscape()
    }, 7000)

    const slider = () => {
        setText({
            count: text.count === statePortrait.length-1 ? 0 :text.count +1
        })
    }

    const sliderLandscape = () => {
        setPic({
            read: pic.read === stateLandscape.length-1 ? 0 :pic.read +1
        })
    }
  return (
    <div className={styles.services}>
        
        <div className={styles.servicesContainer}>
            <div className={styles.servicesDescription}>
                
                <h4>Enjoy Amazing</h4>
                <h2>Features</h2>
                <h4>While You Stay</h4>
                <hr />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus illo similique natus, a recusandae? Dolorum, 
                    unde a quibusdam est? Corporis deleniti obcaecati quibusdam inventore fuga eveniet! Qui delectus tempore amet!
                </p>
                <ul>
                    <li className={styles.serviceHeader}><FaCocktail className={styles.logo}/> Free Cocktail</li>
                    
                    <li className={styles.serviceHeader}><FaHiking className={styles.logo} /> Unlimited Hiking</li>

                    <li className={styles.serviceHeader}><GiBus className={styles.logo} /> Free Transportation</li>
            
                    <li className={styles.serviceHeader}><GiGamepadCross className={styles.logo} /> Free Gaming</li>
                </ul>    

            </div>

            <div className={styles.images}>
                {statePortrait.map((pic, index) => (
                    <div key={index} className={styles.imageOne}>
                        {text.count === index && <img src={pic} alt='the image' />}
                        {/* {console.log(pic , 'from pictures')} */}
                    </div>
                ))}
                
                {stateLandscape.map((picture, index) => (
                    <div key={index} className={styles.imageThree}>
                        {pic.read === index && <img src={picture} alt='the image' />}
                        {/* {console.log(pic , 'from pictures')} */}
                    </div>
                ))}

                {statePortraitTwo.map((pic, index) => (
                    <div key={index} className={styles.imageTwo}>
                        {text.count === index && <img src={pic} alt='the image' />}
                        
                    </div>
                ))}

                
                {/* <div className={styles.imageThree}><img src={imgthree} alt='the image' /></div> */}
                {/* <div className={styles.imageTwo}><img src={imgtwo} alt='the image' /></div> */}
            </div>
        </div>
        

    </div>
  )
}

export default Services