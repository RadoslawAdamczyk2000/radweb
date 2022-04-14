import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { home } from "../content/pages/home";
import Link from "next/link";
import About from "../components/bacterias/HomePage/About/About";
import Offer from "../components/cells/HomePage/Offer/Offer";
import Projects from "../components/cells/HomePage/Projects/Projects";
import WhyMe from "../components/bacterias/HomePage/WhyMe/WhyMe";
import Blog from "../components/cells/HomePage/Blog/Blog";
import Hero from "../components/atoms/Page/Hero";
const Page:NextPage = () => {
  const {hero,seo} = home.pl;
  const {content,image,title} = hero;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        image={image}
        imageTitle={`${title} - zdjęcie`}
        title={title}
        isAbout={false}
        isHome={true}
        isPage={false}
      >
        {content}
      </Hero>
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