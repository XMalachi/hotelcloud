import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import styles from './Layout.module.css'


const Layout = (props) => {
  return (
    <div>
        <NavBar />
        <div className={styles.children}>
          {props.children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout