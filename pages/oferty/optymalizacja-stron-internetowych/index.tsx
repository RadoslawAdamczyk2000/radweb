import Layout from "../../../schemas/Layout";
import { NextPage } from "next";
import { opt } from "../../../content/pages/offers/opt";
import Hero from "../../../components/Page/Hero";
import { OfferCardsWrapper } from "../../../components/Page/styles";
import OfferCard from "../../../components/Page/OfferCard";
const Page:NextPage = () => {
  const {content,seo,hero} = opt.pl;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    
      seoImg={hero.poster}
    >
      <Hero
        content={hero.content}
        image={hero.poster}
        imageTitle={`${hero.title} - zdjęcie`}
        isHome={true}
        title={hero.title}
      />
      <main>
        <OfferCardsWrapper>
          {content.map(({content,title}) =>
            <OfferCard
              isHome={false}
              button={false}
              content={content}
              key={title}
              title={title}
            />
          )}
        </OfferCardsWrapper>
      </main>
    </Layout>
  )
}
export default Page;