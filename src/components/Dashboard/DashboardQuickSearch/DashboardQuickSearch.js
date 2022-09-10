import React from 'react'
import styles from './DashboardQuickSearch.module.css'
import { BsSearch } from "react-icons/bs";

function DashboardQuickSearch() {
  return (
    <div className={styles.dashboardQuickSearch}>
        <div className={styles.dashboardheader}>
            <h2>
                DASHBOARD
            </h2>
        </div>

        <div className={styles.dashboardsearchgroup}>
            <BsSearch className={styles.dashboardsearch} />
            <input type='text' placeholder='Quick Search' className={styles.dashboardsearchinput} />
        </div>
    </div>
  )
}

export default DashboardQuickSearch