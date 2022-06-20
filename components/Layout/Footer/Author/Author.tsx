import { Wrapper } from "./styles";

const Author = () => {
    const year = new Date().getFullYear();
    return(
        <Wrapper>
            <p>
                RadWEB - Radosław Adamczyk &copy; 2021-{year}
            </p>
        </Wrapper>
    )
}
export default Author;