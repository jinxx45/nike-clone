/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles } from '@material-ui/core/styles';
import React , {useState} from 'react'
import styles from './topbar.module.css'
import '../../Components/Modal/Modal.css'
import './topBar.css'
import {Form}  from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWindowClose } from '@fortawesome/free-solid-svg-icons';
import NikeLogo from '../../Images/LandingPage/nike logo.png'

import SignIN  from  '@material-ui/core/Modal';

// Image Imports

import BasketballLogo from '../../Images/LandingPage/basketball-logo.png'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>







function TopBar() {
  
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    
    <div className="modal-items">
      <a  onClick={handleClose} href=""> <FontAwesomeIcon   size='lg' style={{marginLeft:"25rem"}}   icon={faWindowClose} /> </a>
              
              <h4 style={{fontFamily:"'Anton', sans-serif;",fontSize:"1.1rem" , width:"200px"}} className=" pt-5 mb-4  text-upper fw-bold text-center" >YOUR ACCOUNT FOR EVERYTHING  NIKE</h4>
              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="checboxes d-flex">
                        <Form.Check  type="checkbox" label="Keep Me Signed in" />
                        <a href="" className="ms-auto me-1 " >Forgotten Your Password?</a>
                    </div>

                    <p style={{fontSize:"0.8rem" , width:"300px", textAlign:"center"}} className="mt-4 text-center">By Logging in , you agree to Nike's <a href="">Privacy Policy</a> and <a href="">Terms of Use</a></p>
                   
                  </Form.Group>
                </Form>
                
                <button style={{width:"80%"}} className="btn btn-dark mt-4">SIGN IN</button>

                <p style={{fontSize:"0.8rem"}} className="mt-3">Not a Member ? <a href="">Join Us</a></p>
          </div>
  );


    return (
      <>
      <div className="cc">
      <div className={styles.topbar}>
           {/* Left Logo */}
           <img className="me-auto" src={BasketballLogo} height="20" width="25" alt="" />

          <div className={styles.linkItems} >
            <a href="#"> Help </a>
            <a href="#"> Join Us</a>
            <a onClick={handleOpen} style={{marginRight:"2.4rem"}} href="#SignIn"> Sign In </a>
          </div>
          <SignIN 
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </SignIN >
      

        </div>
      </div>
        
      </>
    )
}

export default TopBar
