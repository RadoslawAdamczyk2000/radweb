import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import { example } from "../../../../data/example";
import Project from "../../../atoms/ProjectsPage/Projects/Project";
import ProjectCard from "../../../atoms/ProjectsPage/Projects/ProjectCard";
import {ProjectsWrapper} from './styles/ProjectsWrapper';
const Projects = () => {
    const [xyz,setXyz] = useState(false)
    return(
        <>
            <ProjectsWrapper>
                <ul>
                    {example.map(({id,title,content,tag,tech,picture}) =>
                        <Project
                            image={picture}
                            openModal={() => setXyz(true)}
                            tech={tech}
                            title={title}
                            key={id}
                        />
                    )}
                </ul>
            </ProjectsWrapper>
            <AnimatePresence>
                {   
                    xyz &&
                    <motion.div
                        key="modal"
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        <ProjectCard
                            closeModal={() => setXyz(false)}
                            content={example[0].content}
                            image={example[0].picture}
                            tech={example[0].tech}
                            title={example[0].title}
                        />
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
export default Projects;