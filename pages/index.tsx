import { NextPage } from "next";
import { useRouter } from "next/router";
import About from "../components/Page/Home/About/About/About";
import Blog from "../components/Page/Home/Blog/Blog";
import Hero from "../components/Page/Home/Hero/Hero/Hero";
import Projects from "../components/Page/Home/Projects/Projects/Projects";
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
          <Projects
            button="Poznaj wszystkie"
            content="Tworzeniem stron oraz aplikacji internetowych zajmuję się już od 2016 roku. Natomiast na poziom komercyjny wkroczyłem na przełomie 2020/2021 roku, kiedy to zacząłem zbierać pierwsze zamówienia. Dlaczego projekty są tak istotne? Niezależnie od tego, czy to realizacja prywatna lub komercyjna, to projekty prezentują rozwój developera."
            image="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            locale="pl"
            path="#"
            title="Projekty"
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