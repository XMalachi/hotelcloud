import React from 'react'
import styles from './CompaignOverview.module.css'
import { BsDownload } from "react-icons/bs";

function CompaignOverview() {
  return (
        <div className={styles.campaignOverview}>
            <div className={styles.campaignOverviewHead}>
                <h3>Campaign Overview</h3>
                <h5>This week</h5>
            </div>

            <div className={styles.campaignStats}>
                <div className={styles.booked}>
                    <p>Booked</p>
                    <p>0</p>
                </div>
                <div className={styles.visited}>
                    <p>Visited</p>
                    <p>0</p>
                </div>
                <div className={styles.performance}>
                    <p>Performance</p>
                    <p>0</p>
                </div>
                <div className={styles.downloadPdf}>
                    <button onClick={()=> alert('Statement downloaded')}>
                        <BsDownload className={styles.downloadbtn} /> Download PDF
                    </button>
                </div>
            </div>
        </div>
  )
}

export default CompaignOverview