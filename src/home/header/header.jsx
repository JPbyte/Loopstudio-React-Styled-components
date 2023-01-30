import React from "react";
import logo from "../../images/logo.svg";
import { HeaderL, HeaderUp } from "./style";
import { TfiAlignRight } from "react-icons/tfi";

const Header = () => {
    return(
        <HeaderL>
            <HeaderUp>
                <div className="img-logo">
                    <img src={logo} alt="logo"/>
                    <TfiAlignRight size="2rem" color="white"/>
                </div>
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Carrers</li>
                            <li>Events</li>
                            <li>Products</li>
                            <li>Support</li>
                        </ul>
                    </nav>
            </HeaderUp>
            <div className="headerText">
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </HeaderL>
    )
}

export default Header