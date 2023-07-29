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
                    <img  alt="Image11" className="btnsearch" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABc0lEQVR4nNXVPWsUYRTF8UkEDailkEa0CBLtV9jCIsRaUKwsUhjYKMRG/ACaaJIldipY+A1EEGKTJpAmdqnsRGzEQlgE46r4kl+YcMFhszP7rK5ITjnzv+fcuc/LZNn/FI7jKm5jHtcxPgjjM3iBbd31Euf+1Pwy2mH0Ho8wiwaW8Tre/cStfs3P4wd+4Q5GujAHMIOvEdRINT8cHScV+d3MN5xICbgZ5s+SOsp2a5ai5nEKvBFwvY+AY7EWH/LRVYFDMdMtDKcG5MJmNHYyKxOOBvSmFCpRbOdcZ6ug4ViwVinUe7TVBxCvAjxdCe7deV/wGQezKuFeBDyoBAvCjah5mvUSRmORv2MigT+Fj3Eoaz0DouhadPQJFyu4Ot4Fu55kXiieK1xya5gOwxqu5AexyyW40G/IJbwtuUlztfC849livyGHcAEPsYJVPMEUjgTT/KuQxEbudoTc37chzUJA/sMa+1df0sbkwM0LIYPvvEo7KfFgkmQ93YMAAAAASUVORK5CYII=" />
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