import { home } from "../../../../content/pages/home";
import Button from "../../AllPages/Button";
import { HeroWrapper } from "./styles/HeroWrapper";
const Head = () => {
    const {blog} = home.pl;
    return(
        <HeroWrapper>
            <article>
                <h2>{blog.title}</h2>
                <div>{blog.content}</div>
            </article>
            <div>
                <Button
                    isPage={false}
                    isSecondary={false}
                    isSection={true}
                    path={blog.path}
                    title={blog.button}
                />
            </div>
        </HeroWrapper>
    )
}
export default Head;