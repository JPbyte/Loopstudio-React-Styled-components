import styled from "styled-components";
import bgDesktop from "../../images/desktop/image-hero.jpg";
import bgMobile from "../../images/mobile/image-hero.jpg";

export const HeaderL = styled.header`
    width: 100%;
    height: 40.5rem;
    background: url(${bgDesktop}) no-repeat center;
    background-size: cover;
        .headerText{
            width: 100%;
            max-width: 42rem;
            height: 20rem;
            margin-left: 9rem;
            border: 0.3rem var(--Dark-Gray) solid;
            display: flex;
            align-items: center;
                h1{
                    font-family: var(--JosefinSans);
                    font-weight: 400;
                    font-size: 4.8rem;
                    color: var(--White);
                    margin-left: 1rem;
                }
        }
    @media screen and (max-width: 800px) {
        padding: 3rem 1rem;
        background: url(${bgMobile}) no-repeat center;
        background-size: cover;
            .headerText{
                padding: 0rem;
                margin-left: 0;
                    h1{
                        font-size: 2.4rem;
                    }
            }
    }
`;

export const HeaderUp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 9rem;
        img{
            height: 2rem;
        }
        ul{
            display: flex;
                li{
                    color: var(--White);
                    font-family: var(--Alata);
                    font-size: 1.1rem;
                    margin-left: 2.5rem;
                    cursor: pointer;
                    transition: all 0.5s;
                        &:hover{
                            transform: translateY(-0.2rem);
                            scale: 1.2;
                            color: var(--Black);
                        }
                }
                li:first-child{
                    margin-left: 0;
                }
        }
    @media screen and (max-width: 900px){
        padding: 0;
        margin-bottom: 8rem;
            .img-logo{
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            nav{
                ul{
                    display: none;
                }
            }
    }
`;