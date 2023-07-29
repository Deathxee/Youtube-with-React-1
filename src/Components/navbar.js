import React from 'react'
import "./NavBar.css"
import Logo from "./Assets/Youtube-Logo.png"
import SideBtn from "./Assets/side-btn.png"
import Mic from "./Assets/mic.png"
// import SrchBtn from "./Assets/search.png"
import Create from "./Assets/create.png"
import apps from "./Assets/apps.png"
import Notification from "./Assets/notifications.png"
import PFP from "./Assets/Profile.png"

function navbar() {
  return (
    <>
        <div className="NavBar">
            <div className="left">
                <img src={SideBtn} alt="/" />
                <img src={Logo} alt="/" />
            </div>
            
            <div className="center searchbox">
                <div className="searchform">
                    <input className='searchBox' placeholder="Search" type="text" name="" id=""/>
                </div>
                
                <img className="mic" alt="Image1" src={Mic} />

            </div>
            
            <div className="profile right">
              <img className='Remove'  alt="Image1" src={Create} />
              <img className='Remove'  alt="Image1" src={apps} />
              <img className='Remove'  alt="Image1" src={Notification} />
              <img alt="Image1" src={PFP} />
            </div>
        </div>
    </>
  )
}

export default navbar