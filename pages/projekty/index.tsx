import { NextPage } from "next";
import { useEffect, useState } from "react";
import Hero from "../../components/All/Hero/Hero";
import Result from "../../components/All/Search/Result";
import { Cards } from "../../components/Page/Blog/Cards/styles";
import Card from "../../components/Page/Home/Projects/Card";
import { Tags } from "../../components/Page/Projects/Tags/styles";
import Tag from "../../components/Page/Projects/Tags/Tag";
import { projects } from "../../content/projects";
import { posts } from "../../data/posts";
import {  stackArr } from "../../data/stack";
import Layout from "../../schemas/Layout";
interface i {
    title:string;
    image:string;
    path:string;
    excerpt:string;
    stack:any[];
}
const Page:NextPage = () => {
    const [search,setSearch] = useState('');
    const tags:null|string[] = [];
    const {seo,hero} = projects.home;
    const {projects:works} = posts;
    const searching = (data:any) => {
        return data.filter(
        (item:any) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(search.toLowerCase())
        )
      }
    return(
    <Layout
        description={seo.description}
        image={seo.image}
        title={seo.title}
    >
        <Hero
             content={hero.content}
             handle={(e:any) => setSearch(e.target.value)}
             image={hero.image}
             withSearch={true}
             placeholder='Szukaj...'
             title={hero.title}
        />        
        <main>
            {search && <Result search={search}/>}
            <Tags>
                {stackArr.map(({icon,title},key) =>
                    <Tag
                        icon={icon}
                        handle={tags}
                        key={key}
                        title={title}
                    />
                )}
            </Tags>
            <Cards>
                {searching(works).slice(0).reverse().map(({title,path,image,excerpt,stack}:i,key:number) =>
                    <Card
                        content={excerpt}
                        image={image}
                        link={path}
                        key={key}
                        stack={stack}
                        title={title}
                    />
                )}
            </Cards>
        </main>
    </Layout>
  )
}
export default Page;