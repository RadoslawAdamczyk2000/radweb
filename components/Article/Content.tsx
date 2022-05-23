const Content = ({children,title}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}
export default Content;