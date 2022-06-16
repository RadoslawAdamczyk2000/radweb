import { NextPage } from "next";
import { useRouter } from "next/router";
import Hero from "../components/Page/Home/Hero/Hero/Hero";
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
        </main>
      </>
    </Layout>
  )
}
export default Page;