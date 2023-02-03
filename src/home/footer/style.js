import styled from "styled-components";


export const FooterContent = styled.footer`
    width: 100%;
    height: 14rem;
    background-color: var(--Black);
    display: flex;
    justify-content: center;
    align-items: center;
        img{
            width: 100%;
            max-width: 13rem;
            margin-bottom: 3rem;
        }
    @media screen and (max-width: 900px) {
        height: 30rem;
        flex-direction: column;
    }
`;

export const FooterLeft = styled.div`
    width: 100%;
    max-width: 35rem;
        ul{
            color: (--white);
            display: flex;
            justify-content: space-between;
            width: 100%;
            font-size: 1.3rem;
            max-width: 27rem;
                li{
                    font-family: var(--Alata);
                        a{
                            cursor: pointer;
                            transition: all .4s;
                                &:hover{
                                    color: #FFD700;
                                }
                        }
                }
        }

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 29rem;
        justify-content: space-evenly;
        margin-bottom: 2rem;
            ul{
                height: 13rem;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
            }
    }
`;

export const FooterRight = styled.div`
    width: 100%;
    max-width: 17rem;
    height: 6.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        ul{
            display: flex;
            justify-content: space-evenly;
                li{
                    svg{
                        color: white;
                        width: 1.7rem;
                        height: 1.7rem;
                        transition: all .7s;
                        cursor: pointer;
                            &:hover{
                                color: #FFD700;
                                transform: scale(1.05);
                            }
                    }
                }
        }
        p{
            font-size: 0.94rem;
            font-family: var(--Alata);
            color: var(--Very-Dark-Gray);
        }

    @media screen and (max-width: 900px) {
        
    }
`;