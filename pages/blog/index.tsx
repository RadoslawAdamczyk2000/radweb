import Layout from "../../schemas/Layout";
import { blog } from "../../content/pages/blog";
import { NextPage } from "next";
import {useState} from 'react';
import Hero from "../../components/Page/Hero";
import Blog from "../../components/Page/Blog";
import { posts } from "../../data/posts";
import BlogCard from "../../components/Page/BlogCard";
interface i{
  poster:string,
  path:string,
  time:string,
  title:string
}
const Page:NextPage = () => {
  const {seo,head} = blog.pl;
  const {articles} = posts;
  const [search,setSearch] = useState('');
  return(
    <Layout 
      seoImg={head.image}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={head.content}
        image={head.image}
        imageTitle={head.alt}
        isHome={false}
        title={head.title}
        handle={(e:any) => setSearch(e.target.value)}
        nameSearch='blog'
      />
      <main>
          <Blog isHome={false} button="" content='' path='' title=''>
            {
              articles && articles.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).reverse().map(({poster,path,time,title}:i,key:number) =>
                <BlogCard
                  key={key}
                  date={time}
                  image={poster}
                  isHome={false}
                  path={path}
                  title={title}
                />
              )
            }
          </Blog>
      </main>
    </Layout>
  )
}
export default Page;