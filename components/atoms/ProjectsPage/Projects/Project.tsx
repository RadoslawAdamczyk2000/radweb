import Image from "next/image";
import { ReactElement } from "react";
import { ProjectWrapper } from "./styles/ProjectWrapper";
interface i {
    image : string,
    openModal : any,
    tech : Array<ReactElement>,
    title : string
}
const Project = ({image,openModal,tech,title}:i) => {
    return(
        <ProjectWrapper onClick={openModal}>
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
                        {tech.map(i => <li key={i}>{i}</li>)}
                    </ul>
                </div>
            </div>
        </ProjectWrapper>
    )
}
export default Project;