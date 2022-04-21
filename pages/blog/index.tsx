import Cards from "../../components/bacterias/BlogPage/Cards/Cards";
import Layout from "../../schemas/Layout";
import Tags from "../../components/bacterias/BlogPage/Tags/Tags";
import { blog } from "../../content/pages/blog";
import { NextPage } from "next";
import {useEffect, useState} from 'react';
import Hero from "../../components/Page/Hero";
const Page:NextPage = () => {
  const {seo,head} = blog.pl;
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
          <Tags/>
          <Cards search={search} />
      </main>
    </Layout>
  )
}
export default Page;