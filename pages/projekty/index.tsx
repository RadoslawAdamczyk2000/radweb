import Hero from "../../components/bacterias/AllPages/Hero";
import Layout from "../../schemas/Layout";
import Projects from "../../components/bacterias/ProjectsPage/Projects/Projects";
import Tech from "../../components/atoms/ProjectsPage/Tech/Tech";
import { NextPage } from "next";
import { projects } from "../../content/pages/projects";
import { useState } from "react";
const Page:NextPage = () => {
  const {seo,head} = projects.pl;
  const [search,setSearch] = useState('');
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
        handle={(e:any) => setSearch(e.target.value)}
        title={head.title}
      />
      <main>
        {/* <Tech/> */}
        <Projects search={search}/>
      </main>
    </Layout>
  )
}
export default Page;