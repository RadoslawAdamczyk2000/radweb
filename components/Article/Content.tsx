import { IntContentArticle } from "../../types/interface"
const Content = ({children,isExcerpt}:IntContentArticle) => {
    return(
        <section className={isExcerpt ? 'excerpt' : 'section'} >
            {children}
        </section>
    )
}
export default Content;