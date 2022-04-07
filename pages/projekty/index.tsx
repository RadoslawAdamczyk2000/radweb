import Hero from "../../components/bacterias/AllPages/Hero";
import Layout from "../../schemas/Layout";
import Projects from "../../components/bacterias/ProjectsPage/Projects/Projects";
import Tech from "../../components/atoms/ProjectsPage/Tech/Tech";
import { NextPage } from "next";
import { projects } from "../../content/pages/projects";
const Page:NextPage = () => {
  const {seo,head} = projects.pl;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        altImage={head.alt}
        content={head.content}
        image={head.image}
        isPage={true}
        title={head.title}
      />
      <main>
        <Tech/>
        <Projects/>
      </main>
    </Layout>
  )
}
export default Page;