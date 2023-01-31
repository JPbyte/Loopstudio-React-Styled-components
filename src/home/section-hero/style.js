import styled from "styled-components";
import Interactive from "../../images/desktop/image-interactive.jpg"

export const HeroContainer = styled.div`
    width: 100%;
    height: 45rem;
    background-color: var(--White);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
        height: 35rem;
        margin-top: 2rem;
        align-items: flex-start;
    }
`;

export const Main = styled.div`
    width: 100%;
    max-width: 51rem;
    height: 30rem;
    background: url(${Interactive}) no-repeat;
    background-size: 80% 100%;
    position: relative;

    @media screen and (max-width: 800px) {
        height: 12rem;
        background-position: center;
        background-size: 90% 100%;
    }
`;

export const Article = styled.article`
    position: absolute;
    width: 100%;
    max-width: 24rem;
    height: 20rem;
    background: white;
    bottom: -2rem;
    right: -4rem;
    padding: 3rem;
        h2{
            color: var(--Black);
            font-size: 2rem;
            font-family: var(--JosefinSans);
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }
        p{
            color: var(--Dark-Gray);
            font-size: 0.728rem;
            font-family: var(--Alata);
            line-height: 18px;
        }

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        top: 12rem;
        bottom: 0;
        right: 0;
        padding: 0;
            p{
                width: 100%;
                max-width: 16.5rem;
                font-size: .8rem;
            }
    }
`;