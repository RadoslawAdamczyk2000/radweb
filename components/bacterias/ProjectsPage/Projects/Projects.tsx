import { motion,AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { example } from "../../../../data/example";
import { posts } from "../../../../data/posts";
import Project from "../../../atoms/ProjectsPage/Projects/Project";
import ProjectCard from "../../../atoms/ProjectsPage/Projects/ProjectCard";
import {ProjectsWrapper} from './styles/ProjectsWrapper';
const Projects = () => {
    const [xyz,setXyz] = useState(false);
    const {projects} = posts;
    const [currentProject,setCurrentPage] = useState({
        title:'',
        image:'',
        stack:[],
        excerpt:'',
        path:'',
    });
    const {title,image,stack,excerpt,path} = currentProject;
    useEffect(() => {
        console.log(currentProject);
    });
    return(
        <>
            <ProjectsWrapper>
                <ul>
                    {
                        projects.map(({title,image,stack,excerpt,path},key) => 
                            <Project
                                image={image}
                                openModal={() => setXyz(true)}
                                tech={stack}
                                title={title}
                                handle={setCurrentPage}
                                path={path}
                                excerpt={excerpt}
                                key={key}
                            />
                        )
                    }
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
                            content={excerpt}
                            image={image}
                            tech={stack}
                            title={title}
                            path={path}
                        />
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
export default Projects;