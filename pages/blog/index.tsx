import Cards from "../../components/bacterias/BlogPage/Cards/Cards";
import Hero from "../../components/bacterias/AllPages/Hero";
import Layout from "../../schemas/Layout";
import Tags from "../../components/bacterias/BlogPage/Tags/Tags";
import { blog } from "../../content/pages/blog";
import { NextPage } from "next";
import {useEffect, useState} from 'react';
const Page:NextPage = () => {
  const {seo,head} = blog.pl;
  const [search,setSearch] = useState('');
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        altImage={head.alt}
        content={head.content}
        handle={(e:any) => setSearch(e.target.value)}
        image={head.image}
        isPage={true}
        title={head.title}
      />
      <main>
          <Tags/>
          <Cards search={search} />
      </main>
    </Layout>
  )
}
export default Page;