import Layout from "../../schemas/Layout";
import { NextPage } from "next";
import { offers } from "../../content/pages/offers/offers";
import Hero from "../../components/Page/Hero";
import OfferCard from "../../components/Page/OfferCard";
import { OfferCardsWrapper } from "../../components/Page/styles";
const Page:NextPage = () => {
  const {seo,hero,content} = offers.pl;
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
          {content.map(({content,path,title},key) =>
            <OfferCard
              content={content}
              isHome={false}
              button={true}
              path={path}
              title={title}
              key={key}
            />
          )}
        </OfferCardsWrapper>
      </main>
    </Layout>
  )
}
export default Page;