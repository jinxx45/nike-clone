/* eslint-disable jsx-a11y/anchor-is-valid */
import {Modal} from 'react-bootstrap'
import './searchModal.css'
import NikeLogo from '../../Images/LandingPage/nike logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWindowClose ,faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchModal(props) {
    
    return (
      <Modal  
        {...props}
        
        
      >
        
        <Modal.Body className="search-modal" >
        
        <div className="d-flex itemsSearch ">
            <FontAwesomeIcon className="search-icon-big " icon={faSearch} />
            <img src={NikeLogo}  height="20" width="40" alt="" />
            <input class="form-control text-center searchbar-big  text-muted" type="search" placeholder="Search" aria-label="Search"/>
            <a  onClick={()=>console.log("Hi")} href=""> <FontAwesomeIcon  size='lg' className="mt-1  ms-5 "   icon={faWindowClose} /> </a>        
        </div>

        



        </Modal.Body>
        
      </Modal>
    );
  }

  export default SearchModal;