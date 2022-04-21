import Layout from "../../../schemas/Layout";
import { blog } from "../../../content/pages/blog";
import { NextPage } from "next";
import Hero from "../../../components/Page/Hero";
const Page:NextPage = () => {
  const {seo,head:hero} = blog.pl;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
      seoImg={hero.image}
      >
        <Hero
          content={hero.content}
          image={hero.image}
          imageTitle={`${hero.title} - zdjęcie`}
          isHome={true}
          title={hero.title}
        />
      <main  style={{width:'100%'}}>
      </main>
    </Layout>
  )
}
export default Page;