const Author = () => {
    const year:number = new Date().getFullYear();
    return(
        <div><p>RadWEB - Radosław Adamczyk &copy; 2021 - {year}</p></div>
    )
}
export default Author;