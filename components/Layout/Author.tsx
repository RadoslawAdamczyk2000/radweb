import { AuthorWrapper } from "./styles";
const Author = () => {
    const year:number = new Date().getFullYear();
    return(
        <AuthorWrapper><p>RadWEB - Radosław Adamczyk &copy; 2021 - {year}</p></AuthorWrapper>
    )
}
export default Author;