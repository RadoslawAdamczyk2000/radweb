import Cards from "../../components/bacterias/BlogPage/Cards/Cards";
import Hero from "../../components/bacterias/AllPages/Hero";
import Layout from "../../schemas/Layout";
import Tags from "../../components/bacterias/BlogPage/Tags/Tags";
import { blog } from "../../content/pages/blog";
import { NextPage } from "next";
const Page:NextPage = () => {
  const {seo,head} = blog.pl;
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
          <Tags/>
          <Cards/>
      </main>
    </Layout>
  )
}
export default Page;