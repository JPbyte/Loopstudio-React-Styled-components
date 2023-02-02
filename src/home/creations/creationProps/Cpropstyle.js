import styled from "styled-components";


export const Content = styled.div`
    width: 100%;
    height: 21rem;
    background: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    transition: all 0.6s ease-in-out;
    display: flex;
    align-items: flex-end;
    justify-content: center;
        p{
            width: 100%;
            max-width: 8rem;
            font-size: 1.6rem;
            color: var(--White);
            font-style: italic;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 2.453rem;
            transition: .4s;
        }
        &:hover{
            transform: scale(1.02);
                p{
                    font-size: 1.7rem;
                }
        }

    @media screen and (max-width: 900px) {
        height: 10rem;
        background-position: center;
        justify-content: flex-start;
            p{
                margin-left: 1rem;
            }
    }
`;