import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { home } from "../content/pages/home";
import About from "../components/bacterias/HomePage/About/About";
import Offer from "../components/cells/HomePage/Offer/Offer";
import Projects from "../components/cells/HomePage/Projects/Projects";
import WhyMe from "../components/bacterias/HomePage/WhyMe/WhyMe";
import Blog from "../components/cells/HomePage/Blog/Blog";
import Hero from "../components/Page/Hero";
const Page:NextPage = () => {
  const {hero,seo} = home.pl;
  const {content,image,title} = hero;
  return(
    <Layout 
      seoImg={image}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={content}
        image={image}
        imageTitle={`${title} - wieża widokowa Śrem - zdjęcie`}
        isHome={true}
        title={title}
      />
      <main>
        <About/>
        <Offer/>
        <Blog/>
        <Projects/>
        <WhyMe/>
      </main>
    </Layout>
  )
}
export default Page;