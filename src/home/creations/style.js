import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 46rem;

    @media screen and (max-width: 900px){
        height: 96rem;
        padding: 1rem;
    }
`;

export const Tbutton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 52rem;
        h3{
            font-size: 2.4rem;
            font-family: var(--JosefinSans);
            font-weight: 600;
            text-transform: uppercase;
        }
        button{
            text-transform: uppercase;
            color: var(--Black);
            width: 100%;
            max-width: 7.5rem;
            height: 2.7rem;
            border: 0.13rem var(--Dark-Gray) solid;
            background-color: var(--White);
            font-family: var(--Alata);
            letter-spacing: 3px;
            transition: 0.4s;
                &:hover{
                    background-color: var(--Black);
                    color: var(--White);
                    border: 0.16rem var(--Black) solid;
                    transform: scale(1.05);
                }
        }
`;

//Div Mom grid//
export const GridNow = styled.div`
    width: 100%;
    max-width: 52rem;
    height: 41rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 900px) {
        height: 86rem;
        grid-template-columns: repeat(1, 1fr);
    }
`;