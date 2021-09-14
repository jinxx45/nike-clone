/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './topbar.module.css'
import './topBar.css'


import SignInModal from '../Modal/SignInModal';

// Image Imports

import BasketballLogo from '../../Images/LandingPage/basketball-logo.png'

function TopBar() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
      <div className="cc">
      <div className={styles.topbar}>
           {/* Left Logo */}
           <img className="me-auto" src={BasketballLogo} height="20" width="25" alt="" />

          <div className={styles.linkItems} >
            <a href="#"> Help </a>
            <a href="#"> Join Us</a>
            <a onClick={() => setModalShow(true)} style={{marginRight:"2.4rem"}} href="#"> Sign In </a>
          </div>

          <SignInModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      

        </div>
      </div>
        
      </>
    )
}

export default TopBar
