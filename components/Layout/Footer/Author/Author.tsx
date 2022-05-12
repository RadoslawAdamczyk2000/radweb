const Author = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div>
            <p>Radosław Adamczyk - RadWEB &copy; {currentYear === 2022 ? currentYear : `2022 - ${currentYear}` } </p>
        </div>
    )
}
export default Author;