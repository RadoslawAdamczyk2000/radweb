import Image from "next/image";
import { ReactElement } from "react";
import Button from "../../AllPages/Button";
import { ProjectCardWrapper } from "./styles/ProjectCardWrapper";
import {VscClose} from 'react-icons/vsc'
interface i {
    closeModal : any,
    content : string,
    image : string,
    tech : Array<ReactElement>,
    title : string,
    path : string,
}
const ProjectCard = ({closeModal,content,image,tech,title,path}:i) => {
    return(
        <ProjectCardWrapper onClick={closeModal}>
            <div className="card">
                <div className="close">
                    <button onClick={closeModal}>
                        <VscClose/>
                    </button>
                </div>
                <div className="box">
                    <div className="picture">
                        <figure>
                            <Image
                                alt={`${title} poster image`}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                src={image}
                            />
                        </figure>
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>{content.substring(0,187)}...</p>
                        <ul>{tech.map(i => <li key={i}>{i}</li>)}</ul>
                        <Button
                            isPage={false}
                            isSecondary={false}
                            isSection={true}
                            path={path}
                            title="Więcej"
                        />
                    </div>
                </div>
            </div>
        </ProjectCardWrapper>
    )
}
export default ProjectCard;