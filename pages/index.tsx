import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { home } from "../content/pages/home";
import About from "../components/bacterias/HomePage/About/About";
import Offer from "../components/cells/HomePage/Offer/Offer";
import Projects from "../components/cells/HomePage/Projects/Projects";
import WhyMe from "../components/bacterias/HomePage/WhyMe/WhyMe";
import Blog from "../components/cells/HomePage/Blog/Blog";
import Hero from "../components/Page/Hero";
import Content from "../components/Page/Content";
import Offers from "../components/Page/Offers";
const Page:NextPage = () => {
  const {about,hero,seo,whyMe} = home.pl;
  return(
    <Layout 
      seoImg={hero.image}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        image={hero.image}
        imageTitle={`${hero.title} - wieża widokowa Śrem - zdjęcie`}
        isHome={true}
        title={hero.title}
      />
      <main>
        <Content
          content={about.content}
          primary={true}
          title={about.title}
          button={about.button}
          movie={true}
          moviePath={about.movie}
          path={about.path}
          withMedia={true}
        />
        <Offers isHome={true} />
        <Offer/>
        <Blog/>
        <Projects/>
        <Content
          content={whyMe.content}
          title={whyMe.title}
          movie={false}
          primary={false}
          imagePath={whyMe.image}
          withMedia={true}
        />
      </main>
    </Layout>
  )
}
export default Page;