/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import styles from './NavBar.module.css'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faHeart,  faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import SearchModal from '../SearchModal/searchModal'



// Images Import
import NikeLogo from '../../Images/LandingPage/nike logo.png'

function NavBar() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <div className={styles.navBar}>

        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand " href="#">
        <img src={NikeLogo} height="25" width="50" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kids</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Customize</a>
        </li>
        <li class="nav-item">
          <a class="nav-link last-before" href="#">Sale</a>
        </li>
        <li class="nav-item">
          <a class="nav-link last-item" href="#">SKNRS</a>
        </li>
      </ul>
   
    </div>
    <form class="d-flex">
        <FontAwesomeIcon className="search-icon collapse navbar-collapse" icon={faSearch} />
        <input  onClick={() => setModalShow(true)} class="form-control collapse navbar-collapse searchbar me-2 text-muted" type="search" placeholder="Search" aria-label="Search"/>
        <FontAwesomeIcon size='lg' className="mt-1 mx-3 "   icon={faHeart} />
        <FontAwesomeIcon size='lg' className="mt-1 mx-3 right-icon"   icon={faShoppingBag} />

        <SearchModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
      </form>
  </div>
</nav>
            
        </div>
        </>
    )
}

export default NavBar
