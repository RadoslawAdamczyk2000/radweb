import Image from "next/image";
import { ReactElement } from "react";
import { ProjectWrapper } from "./styles/ProjectWrapper";
interface i {
    handle : any,
    image : string,
    openModal : any,
    tech : Array<ReactElement>,
    path:string,
    excerpt:string,
    title : string
}
const Project = ({handle,path,excerpt,image,openModal,tech,title}:i) => {
    const click = () => {
        openModal();
        handle({
            title:title,
            image:image,
            stack:[...tech],
            path:path,
            excerpt:excerpt
        });
    }
    return(
        <ProjectWrapper onClick={() => click()}>
            <figure>
                <Image
                    alt={`${title} image`}
                    layout='fill'
                    loading="lazy"
                    objectFit="cover"
                    objectPosition='center'
                    src={image}
                />
            </figure>
            <div>
                <div>
                    <h4>{title}</h4>
                    <ul>
                        {tech.map((i:any,key) => <li key={key}>{i}</li>)}
                    </ul>
                </div>
            </div>
        </ProjectWrapper>
    )
}
export default Project;