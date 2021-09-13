/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Offer.module.css'

function Offer() {
    return (
       <>
       <div className={styles.offerMessage}>
           <h7  className="text-uppercase">Free Delivery </h7>
           <p style={{fontSize:"0.9rem"}} className="text-muted">Applies to orders of Rs.14,000 or More. 
           <a href="#" style={{color:"black"}}>View Details</a></p>
       </div>
       </> 
    )
}

export default Offer
