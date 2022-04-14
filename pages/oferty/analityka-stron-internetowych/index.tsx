import Layout from "../../../schemas/Layout";
import { blog } from "../../../content/pages/blog";
import { NextPage } from "next";
import Hero from "../../../components/atoms/Page/Hero";
const Page:NextPage = () => {
  const {seo,head:hero} = blog.pl;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
      seoImg={hero.image}
    >
      <Hero
        image={hero.image}
        imageTitle={`${hero.title} - zdjęcie`}
        title={hero.title}
        isPage={true}
      >
        {hero.content}
      </Hero>
      <main>
      </main>
    </Layout>
  )
}
export default Page;