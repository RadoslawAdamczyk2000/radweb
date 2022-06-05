import styled from 'styled-components';
export const OptionsWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:flex-end;
    padding:0 1rem 0 0;
    @media only screen {
        @media (max-width:210px){
            margin:0 auto;
            width:100%;
            & > * {
                transform:scale(.85);
            }
        }
    }
`