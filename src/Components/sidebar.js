import React from 'react'
import './side_bar.css'
import Home from './Assets/HomeIcon.png'
import Explore from './Assets/Explore-Icon.png'
import Library from './Assets/Library-Icon.png'
import History from './Assets/history.png'
import ShowMore from './Assets/Show-More.png'
import Subscriprion from './Assets/Subscription-Icon.png'



function sidebar() {
    
  return (
    
    <div className="Sidebar">
        <div className="shortcut-links">
            <a title='Home' href="/"><img src={Home} /><p>Home</p></a> 
            <a title='Explore'  href="/"><img src={Explore} /><p>Explore</p></a>
            <a title='Subscriprion'  href="/" ><img src={Subscriprion} /><p>Subscriprion</p></a> 
            <a title='Library'  href="/"><img src={Library} /><p>Library</p></a> 
            <a title='History'  href="/"><img src={History} /><p>History</p></a> 
            <a title='Show More'  href="/"><img src={ShowMore} /><p>Show More</p></a>
        </div>
    </div>
  )
}

export default sidebar


