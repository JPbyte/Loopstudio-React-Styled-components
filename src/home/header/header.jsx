import React, { useState } from "react";
import { HeaderL, HeaderUp, NavList } from "./style";


//images and icons//
import { TfiAlignCenter } from "react-icons/tfi";
import logo from "../../images/logo.svg";

const Header = () => {

    const [showMenu, setMenu] = useState(false);
    
    //function for hamburger buton//
    function toggle(){
        setMenu(!showMenu)
    }
    return(
        <HeaderL>
            <HeaderUp>
                <div className="img-logo">
                    <img src={logo} alt="logo"/>
                    <TfiAlignCenter onClick={toggle} size="2rem" color="white" cursor="pointer"/>
                </div>
                    <NavList open={showMenu}>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#Carrers">Carrers</a></li>
                            <li><a href="#Events">Events</a></li>
                            <li><a href="#Products">Products</a></li>
                            <li><a href="#Support">Support</a></li>
                        </ul>
                    </NavList>
            </HeaderUp>
            <div className="headerText">
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </HeaderL>
    )
}

export default Header