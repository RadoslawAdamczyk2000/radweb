import styled from 'styled-components';
export const TestimonialsWrapper = styled.section`
    margin:5rem auto;
    text-align:center;
    opacity:.75;
    max-width:95%;
    width:85rem;
    & > h2 {
        font-family:${({theme}) => theme.fonts.family.heading};
        font-size:5rem;
        letter-spacing:.65rem;
    }
    & > p {
        font-size:1.9rem;
        line-height:calc(1.9rem * 1.85);
        color:${({theme}) => theme.colors.gray};
    }
    @media only screen {
        @media (max-width:500px){
            & > h2{
                font-size:3rem;
            }
            & > p {
                font-size:1.65rem;
                line-height:calc(1.65rem * 1.85);
            }
        }
    }
`