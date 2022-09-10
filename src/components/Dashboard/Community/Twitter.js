import React from 'react'
import styles from './Twitter.module.css'
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Twitter() {
    
  return (
    <div className={styles.twitterComponent}>
      <Link to='http://www.twitter.com'>
        <h3 className={styles.twitterComponentHeader}>TWITTER</h3>
        <div className={styles.twitterComponentInner}>
          <div className={styles.twitterIcon}><BsTwitter /></div>

          <div className={styles.twitterText}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam unde quaerat delectus pariatur sit
              harum ipsa quod sed?
            </p>
          </div>
                
        </div>
      </Link>
      

    </div>
  )
}

export default Twitter