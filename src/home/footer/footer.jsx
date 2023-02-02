import React from "react";
import { FooterContent } from "./style";

//images and icons//
import logo from "../../images/logo.svg";

export const Footer = () =>{
    return(
        <FooterContent>
            <div className="footer-left">
                <img src={logo} alt="logo"/>
            </div>
        </FooterContent>
    )   
}