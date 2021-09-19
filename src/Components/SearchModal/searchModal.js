/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Modal} from 'react-bootstrap'
import './searchModal.css'
import NikeLogo from '../../Images/LandingPage/nike logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWindowClose ,faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchModal(props) {

  const {close } = props;


    return (
      
      <Modal  
        {...props}
        
        
      >

        
        <Modal.Body  className="search-modal" >
        
        <div className="d-flex itemsSearch ">
            <FontAwesomeIcon style={{left:"30%",top:"22%"}}  className="search-icon-big " icon={faSearch} />
            <img src={NikeLogo}  height="20" width="40" alt="" />
            <input  class="form-control text-center searchbar-big  text-muted" type="search" placeholder="Search" aria-label="Search"/>
            <a onClick={close} > <FontAwesomeIcon  size='lg' className="mt-1  ms-5 "   icon={faWindowClose} /> </a>        
        </div>

        



        </Modal.Body>
        
      </Modal>
    );
  }

  export default SearchModal;