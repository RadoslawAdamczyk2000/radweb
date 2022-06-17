import { NextPage } from "next";
import { useRouter } from "next/router";
import About from "../components/Page/Home/About/About/About";
import Blog from "../components/Page/Home/Blog/Blog";
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
          <Blog
            button="Wszystkie artykuły"
            content="Strony internetowe i historia - dwie dziedziny, które są moimi największymi pasjami. Przeszłość i przyszłość. Znajdziesz u mnie tematy związane ze stronami internetowymi, ich tworzeniem oraz pozycjonowaniem jak i zagdanienia historyczne, poczynając od historii lokalnej a kończąc na historii globalnej."
            path=""
            title="Blog"
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