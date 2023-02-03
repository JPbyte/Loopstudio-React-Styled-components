import React from "react";
import { FooterContent, FooterLeft, FooterRight } from "./style";

//images and icons//
import logo from "../../images/logo.svg";
import { FaFacebookSquare, FaTwitter, FaPinterestSquare, FaInstagramSquare} from "react-icons/fa";

export const Footer = () =>{
    return(
        <FooterContent>
            <FooterLeft>
                <img src={logo} alt="logo"/>
                <ul>
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Careers">Careers</a>
                    </li>
                    <li>
                        <a href="#Events">Events</a>
                    </li>
                    <li>
                        <a href="#Products">Products</a>
                    </li>
                    <li>
                        <a href="#Support">Support</a>
                    </li>
                </ul>
            </FooterLeft>
            <FooterRight>
                <ul>
                    <li>
                        <FaFacebookSquare/>
                    </li>
                    <li>
                        <FaTwitter/>
                    </li>
                    <li>
                        <FaPinterestSquare/>
                    </li>
                    <li>
                        <FaInstagramSquare/>
                    </li>
                </ul>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </FooterRight>
        </FooterContent>
    )   
}