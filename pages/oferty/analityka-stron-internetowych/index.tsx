import Hero from "../../../components/bacterias/AllPages/Hero";
import Layout from "../../../schemas/Layout";
import { blog } from "../../../content/pages/blog";
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
      </main>
    </Layout>
  )
}
export default Page;