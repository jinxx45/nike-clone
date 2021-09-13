/* eslint-disable jsx-a11y/anchor-is-valid */
import {Modal,Form}  from 'react-bootstrap'

import './Modal.css'
import NikeLogo from '../../Images/LandingPage/nike logo.png'


function SignInModal(props) {
    return (
      <Modal
        {...props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>
          <div className="modal-items">
              <img className="mt-1 mb-4" src={NikeLogo} height="40" width="80" alt="" />
              <h2 className=" mb-4 text-upper fw-bold text-center" >Your Account for Everything Nike</h2>
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

                    <p className="mt-5 text-center">By Logging in , you agree to Nike's <a href="">Privacy Policy</a> and <a href="">Terms of Use</a></p>
                   
                  </Form.Group>
                </Form>
                
                <button style={{width:"30%"}} className="btn btn-dark mt-4">Sign In</button>

                <p className="mt-3">Not a Member ? <a href="">Join Us</a></p>
          </div>
        </Modal.Body>

      </Modal>
    );
  }

  export default SignInModal;