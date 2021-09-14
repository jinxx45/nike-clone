import React from 'react'
import styles from './MainContent.module.css'



// Image Imports
import MainPicture from '../../Images/LandingPage/big-image.jpg'

function MainContent() {
    return (
        <>
        <div className="row">
            <div className="col-md-12">
                <div className={styles.MainContent}>
                <img src={MainPicture} className={styles.mainImg} alt="" />
                <h1 style={{marginBottom:"-0.4rem"}}>YOUR NIKE CONNECTION</h1>
                <p>More sport , more inspiration , more Nike !</p>
                <button className="btn btn-dark landingPageButton" style={{borderRadius:"20px", width:"12rem" ,height:"2.7rem"}}>Get Your Great</button>
            </div>
            </div>
        </div>
      
        </>
    )
}

export default MainContent
