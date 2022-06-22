import { NextPage } from "next";
import { useRouter } from "next/router";
import Seo from "../components/Layout/Seo/Seo";
import About from "../components/Page/Home/About/About/About";
import Blog from "../components/Page/Home/Blog/Blog";
import Hero from "../components/Page/Home/Hero/Hero/Hero";
import Offers from "../components/Page/Home/Offers/Offers/Offers";
import Projects from "../components/Page/Home/Projects/Projects/Projects";
import Steps from "../components/Page/Home/Steps/Steps/Steps";
import { home } from "../content/home";
import { isLocaleAccepted } from "../lib/functions/isLocaleAccepted";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const {locale} = useRouter();
  return(
  <Layout
    isHome={true}
  >
    <>
      {
      locale && isLocaleAccepted(locale) ?  <>
        <Seo
          description={home[locale].seo.description}
          image='/assets/images/wall.jpg'
          title={home[locale].seo.title}
        />
        <Hero
          movie="/assets/movies/corridor.mp4"
          title={home[locale].hero}
        />
        <main>
          <Blog
            button={home[locale].blog.button}
            content={home[locale].blog.content}
            path={home[locale].blog.path}
            title={home[locale].blog.title}
          />
          <Projects
            button={home[locale].projects.button}
            content={home[locale].projects.content}
            image="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            locale={locale}
            path={home[locale].projects.path}
            title={home[locale].projects.title}
          />
          <Offers
            button={home[locale].offers.button}
            card={home[locale].offers.card}
            content={home[locale].offers.content}
            locale={locale}
            path={home[locale].offers.path}
            title={home[locale].offers.title}
          />
          <Steps
            content={home[locale].steps.content}
            locale={locale}
            title={home[locale].steps.title}
          />
          <About
            button={home[locale].about.button}
            content={home[locale].about.content}
            image="/assets/images/tower.webp"
            path={home[locale].about.path}
            title={home[locale].about.title}
          />  
        </main>
      </> : ''
      }
    </>
  </Layout>
  )
}
export default Page;