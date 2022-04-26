import Layout from "../../../schemas/Layout";
import { NextPage } from "next";
import { pos } from "../../../content/pages/offers/pos";
import Hero from "../../../components/Page/Hero";
import { OfferCardsWrapper } from "../../../components/Page/styles";
import OfferCard from "../../../components/Page/OfferCard";
const Page:NextPage = () => {
  const {seo,hero,content} = pos.pl;
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
              button={false}
              content={content}
              isHome={false}
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