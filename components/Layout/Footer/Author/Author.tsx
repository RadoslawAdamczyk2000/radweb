import { AuthorWrapper } from "./styles";
const Author = () => {
    const currentYear = new Date().getFullYear();
    return(
        <AuthorWrapper>
            <p>Radosław Adamczyk - RadWEB &copy; {currentYear === 2022 ? currentYear : `2022 - ${currentYear}` } </p>
        </AuthorWrapper>
    )
}
export default Author;