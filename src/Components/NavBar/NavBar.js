/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

import styles from './NavBar.module.css'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faHeart,  faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import SearchModal from '../SearchModal/searchModal'

// Images Import

import NikeLogo from '../../Images/LandingPage/nike logo.png'
import ShoppingBagLogo from '../../Images/LandingPage/shopping-bag.png'
import HelpLogo from '../../Images/LandingPage/information.png'
import OrderLogo from '../../Images/LandingPage/box.png'

function NavBar() {
  const [modalShow, setModalShow] = React.useState(false);

  const handleCloseParent = () =>
  {
    setModalShow(false); 
  }
    return (
        <>
        <div className={styles.navBar}>

          <section className="desktop-nav">
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
        <div className="icons-nav">
            <FontAwesomeIcon  size='lg' className="mt-1 mx-3 "   icon={faHeart} />
            <FontAwesomeIcon  size='lg' className="mt-1 mx-3 right-icon"   icon={faShoppingBag} />
        </div>
        

        <SearchModal
        close = {handleCloseParent}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
      </form>
  </div>
</nav>
          </section>


          <section className="mobile-nav">
            <div onClick={() => setModalShow(true)} className="onclick-search-modal">
            <FontAwesomeIcon style={{right:"4.5rem",top:"0.3rem",height:"22px",width:"22px"}} className="search-icon " icon={faSearch} />
            </div>
          
          <nav role='navigation'>
		<div  id="menuToggle">
			<input type="checkbox" />
			<span></span>
			<span></span>
			<span></span>
			<ul id="menu">
				<a href="#">
					<li>Men <a href="">&gt;</a></li>
				</a>
				<a href="#">
					<li className="me-auto">Women <a href="">&gt;</a></li>
				</a>
				<a href="#">
					<li>Kids <a href="">&gt;</a></li>
				</a>
				<a href="#">
					<li>Customize <a href="">&gt;</a></li>
				</a>
				<a href="#">
					<li>Sales <a href="">&gt;</a></li>
				</a>
				<a href="#">
					<li>SKRNS <a href="">&gt;</a></li>
				</a>

        <p className="fw-bold" style={{marginTop:"1.1rem",fontSize:"1.1rem",width:"290px"}}>Become a Nike Member for the best products, inspiration and stories in sport. <a href=""> Learn more </a> </p>

        <div className="button-mobile-nav">
          <button className="btn btn-dark mx-2 fw-bold"> Join Us</button>
          <button className="btn btn-light mx-4 fw-bold"> Sign In </button>
        </div>

        <div style={{marginTop:"2.7rem"}} className="mobile-nav-icon-with-text">
          <div className="icon-with-text d-flex">
              <img src={ShoppingBagLogo}  alt="" />
              <p>Bag</p>
          </div>
          <div className="icon-with-text d-flex">
            <img src={OrderLogo} alt="" />
            <p>Orders</p>
          </div>
          <div className="icon-with-text d-flex">
            <img src={HelpLogo} alt="" />
            <p>Help</p>
          </div>
        </div>

			</ul>

      
		</div>
	</nav>

  
          </section>

  
            
        </div>
        </>
    )
}

export default NavBar
