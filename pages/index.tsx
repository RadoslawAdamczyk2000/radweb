import { NextPage } from "next";
import { useRouter } from "next/router";
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
        <Hero
          movie="/assets/movies/corridor.mp4"
          title={locale && isLocaleAccepted(locale) ? home[locale].hero : ''}
        />
        <main>
          <Blog
            button={locale && isLocaleAccepted(locale) ? home[locale].blog.button : ''}
            content={locale && isLocaleAccepted(locale) ? home[locale].blog.content : ''}
            path={locale && isLocaleAccepted(locale) ? home[locale].blog.path : ''}
            title={locale && isLocaleAccepted(locale) ? home[locale].blog.title : ''}
          />
          <Projects
            button={locale && isLocaleAccepted(locale) ? home[locale].projects.button : ''}
            content={locale && isLocaleAccepted(locale) ? home[locale].projects.content : ''}
            image="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            locale={locale && isLocaleAccepted(locale) ? locale : 'pl'}
            path={locale && isLocaleAccepted(locale) ? home[locale].projects.path : ''}
            title={locale && isLocaleAccepted(locale) ? home[locale].projects.title : ''}
          />
          <Offers
            button={locale && isLocaleAccepted(locale) ? home[locale].offers.button : ''}
            card={locale && isLocaleAccepted(locale) ? home[locale].offers.card : ''}
            content={locale && isLocaleAccepted(locale) ? home[locale].offers.content : ''}
            locale={locale && isLocaleAccepted(locale) ? locale : 'pl'}
            path={locale && isLocaleAccepted(locale) ? home[locale].offers.path : ''}
            title={locale && isLocaleAccepted(locale) ? home[locale].offers.title : ''}
          />
          <Steps
            content={locale && isLocaleAccepted(locale) ? home[locale].steps.content : ''}
            locale={locale && isLocaleAccepted(locale) ? locale : 'pl'}
            title={locale && isLocaleAccepted(locale) ? home[locale].steps.title : ''}
          />
          <About
            button={locale && isLocaleAccepted(locale) ? home[locale].about.button : ''}
            content={locale && isLocaleAccepted(locale) ? home[locale].about.content : ''}
            image="/assets/images/tower.webp"
            path={locale && isLocaleAccepted(locale) ? home[locale].about.path : ''}
            title={locale && isLocaleAccepted(locale) ? home[locale].about.title : ''}
          />
        </main>
      </>
    </Layout>
  )
}
export default Page;