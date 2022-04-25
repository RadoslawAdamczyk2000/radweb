import Layout from "../../schemas/Layout";
import { NextPage } from "next";
import { projects } from "../../content/pages/projects";
import { ReactElement, useState } from "react";
import Hero from "../../components/Page/Hero";
import { posts } from "../../data/posts";
import Projects from "../../components/Page/Projects";
import ProjectCard from "../../components/Page/ProjectCard";
interface i{
  title:string,
  image:string,
  stack:ReactElement[],
  excerpt:string
  path:string
}
const Page:NextPage = () => {
  const {seo,head:hero} = projects.pl;
  const [search,setSearch] = useState('');
  const {projects:articles} = posts;
  const searching = (data:any) => {
    return data.filter(
      (item:any) =>
      item.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  }
  return(
    <Layout
      seoImg={hero.image}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        image={hero.image}
        imageTitle={`${hero.title} - zdjęcie`}
        isHome={false}
        title={hero.title}
        handle={(e:any) => setSearch(e.target.value)}
        nameSearch='Szukaj'
      />
      <main>
        <Projects isHome={false}>
        {
          searching(articles).reverse().map(({title,image,stack,excerpt,path}:i,key:number) =>
            <ProjectCard
              image={image}
              imageTitle={`${title} - zdjęcie`}
              isHome={true}
              path={path}
              socials={stack}
              title={title}
              excerpt={excerpt}
              key={key}
            />
          )
        }
        </Projects>
      </main>
    </Layout>
  )
}
export default Page;