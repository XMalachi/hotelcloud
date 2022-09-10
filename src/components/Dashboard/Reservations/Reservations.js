import React, { useContext } from 'react'
import styles from './Reservations.module.css'
import { DoughnutFunc } from '../Reservations/Doughnut'
import CompaignOverview from '../../CampaignOverview/CompaignOverview'
import { TbSum } from "react-icons/tb";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { GiArchiveRegister } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import GlobalContext from '../../../Context';


function Reservations() {
    const {rooms} = useContext(GlobalContext)
    console.log("from the component", rooms.length)
  return (
    <div className={styles.reservations}>

        <div className={styles.reservationHeader}>
            <h4>Today's Reservations</h4>
        </div>

        <div className={styles.stats}>
            <div className={styles.totalRooms}>
                <div className={styles.dashboardicons}>
                    <IoIosBed />
                </div>

                <div>
                    <h4>{rooms.length}</h4>
                    <h5>Total Rooms</h5>
                </div>
                
            </div>

            <div className={styles.confirmedBookings}>
                <div className={styles.dashboardicons}>
                    <GiArchiveRegister />
                </div>

                <div>
                    <h4>0</h4>
                    <h5>Confirmed Booking</h5>
                </div>
            </div>

            <div className={styles.checkedIn}>
                <div className={styles.dashboardicons}>
                    <GoSignIn />
                </div>

                <div>
                    <h4>0</h4>
                    <h5>Checked In</h5>
                </div>
                
            </div>
            
            <div className={styles.checkedOut}>
                <div className={styles.dashboardicons}>
                    <GoSignOut />
                </div>

                <div>
                    <h4>0</h4>
                    <h5>Checked Outs</h5>
                </div>

                
            </div>


        </div>
        
        <div className={styles.totalncharts}>

            <div className={styles.totalCampaign}>
                <div className={styles.totalsalesthisweek}>
                    <div className={styles.dashboardicons}>
                        <TbSum />
                    </div>

                    <div>
                        <h3>$0</h3>
                        <h5>Total Sales This Week</h5>
                    </div>
                    
                </div>
                <CompaignOverview /> 
            </div>
            
            
            <div className={styles.chartjsDoughnut}>
                <DoughnutFunc />
                
            </div>

        </div>
        
        
    </div>
  )
}

export default Reservations