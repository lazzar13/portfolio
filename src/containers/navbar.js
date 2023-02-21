import React from "react";
import {GiPlagueDoctorProfile,GiRamProfile,Gi3DGlasses,Gi3DMeeple,GiShoonerSailboat,Gi3DHammer} from 'react-icons/gi'
    



const Navbar=()=>{

    return(

        <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle" >
        <span></span>
        </label>

        <ul className="menu__box">
        <li><a className="menu__item" href="#profileText">Home</a></li>
        <li><a className="menu__item" href="#skills">Skills</a></li>
        <li><a className="menu__item" href="#jump2">Albums</a></li>
        <li><a className="menu__item" href="#jump3">Beats</a></li>
        <li><a className="menu__item" href="#jump4">Contact</a></li>
        </ul>
    </div>
    )



}

export default Navbar;