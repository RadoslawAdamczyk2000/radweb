import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../components/All/Hero/Hero";
import Result from "../../components/All/Search/Result";
import Card from "../../components/Page/Blog/Cards/Card";
import { Cards } from "../../components/Page/Blog/Cards/styles";
import { blog } from "../../content/blog";
import { posts } from "../../data/posts";
import Layout from "../../schemas/Layout";
interface i {
  date:string;
  excerpt:string;
  image:string;
  path:string;
  tags:string[];
  title:string;
}
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  const {articles} = posts;
  const {seo,hero} = blog.home;
  const searching = (data:any) => {
    return data.filter(
    (item:any) =>
      item.date.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
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
          <Cards>
            {searching(articles).slice(0).reverse().map(({date,excerpt,image,path,tags,title}:i,key:number) =>
              <Card
                content={excerpt}
                date={date}
                image={image}
                key={key}
                link={path}
                tags={tags}
                title={title}
              />
            )}
          </Cards>
        </main>
    </Layout>
  )
}
export default Page;