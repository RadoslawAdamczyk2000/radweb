import Button from "../AllPages/Button"
import { HeroContentWrapper } from "./styles/HeroContentWrapper";
// interface i {
//     content : string,
//     links : Array<string> | any,
//     title : string
// }
const HeroContent = ({content,links,title}) => {
    return(
        <HeroContentWrapper>
            <section className="content">
                <h1>{title}</h1>
                <p>{content}</p>
            </section>
            <ul className="buttons">
                {links.map( ({path,title}) => 
                    <Button 
                        isPage={true} 
                        isSecondary={false} 
                        key={title}
                        isSection={false} 
                        path={path} 
                        title={title}  
                    />
                )}
            </ul>
        </HeroContentWrapper>
    )
}
export default HeroContent;