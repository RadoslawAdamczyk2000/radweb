import Cards from "../../components/bacterias/BlogPage/Cards/Cards";
import Layout from "../../schemas/Layout";
import Tags from "../../components/bacterias/BlogPage/Tags/Tags";
import { blog } from "../../content/pages/blog";
import { NextPage } from "next";
import {useEffect, useState} from 'react';
import Hero from "../../components/atoms/Page/Hero";
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
        image={head.image}
        title={head.title}
        handle={(e:any) => setSearch(e.target.value)}
        imageTitle={`${head.title} - zdjęcie`}
        isAbout={false}
        isHome={false}
        isPage={false}
        isSearch={true}
      >
        {head.content}
      </Hero>
      {/* <Hero
        altImage={head.alt}
        content={head.content}
        handle={(e:any) => setSearch(e.target.value)}
        image={head.image}
        isPage={true}
        title={head.title}
      /> */}
      <main>
          <Tags/>
          <Cards search={search} />
      </main>
    </Layout>
  )
}
export default Page;