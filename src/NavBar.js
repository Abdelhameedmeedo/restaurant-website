import React from 'react'
import {Link,NavLink} from 'react-router-dom'
//import './sass/NavBar.scss'
import './trynav.css'
const Navbar = (props)=>{
    return(
        <div className="nav">
            <div className="container">
                <ul className="links">
                    <li> <span>مطعم الصديقان</span> </li>
                    <li> <Link to="/homePage">الرئيسية  </Link> </li>
                    <li> <Link onClick = {()=>props.complaintForm()}>الشكاوى</Link> </li>
                    <li> <Link onClick = {()=>props.ratingForm()}>التقييم</Link> </li>
                </ul>   
            </div>
        </div>
    )
}
export default Navbar