import Layout from "../../schemas/Layout";
import Projects from "../../components/bacterias/ProjectsPage/Projects/Projects";
import Tech from "../../components/atoms/ProjectsPage/Tech/Tech";
import { NextPage } from "next";
import { projects } from "../../content/pages/projects";
import { useState } from "react";
import Hero from "../../components/atoms/Page/Hero";
const Page:NextPage = () => {
  const {seo,head:hero} = projects.pl;
  const [search,setSearch] = useState('');
  return(
    <Layout
      seoImg={hero.image}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        image={hero.image}
        imageTitle={`${hero.title} - zdjęcie`}
        title={hero.title}
        handle={(e:any) => setSearch(e.target.value)}
        isSearch={true}
      >
        {hero.content}
      </Hero>
      <main>
        {/* <Tech/> */}
        <Projects search={search}/>
      </main>
    </Layout>
  )
}
export default Page;