import Layout from "../../../schemas/Layout";
import { NextPage } from "next";
import { www } from "../../../content/pages/offers/www";
import Cards from "../../../components/bacterias/OffersPage/Cards";
import Card from "../../../components/atoms/OffersPage/Card";
import Hero from "../../../components/Page/Hero";
import { OfferCardsWrapper } from "../../../components/Page/styles";
import OfferCard from "../../../components/Page/OfferCard";
const Page:NextPage = () => {
  const {seo,hero,content} = www.pl;
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
      <main className="larger"  style={{width:'100%'}}>
        <OfferCardsWrapper>
          {content.map(({content,price,title}) => 
            <OfferCard
              isHome={false}
              button={false}
              content={content}
              title={title}
              price={price}
              key={title}
            />
          )}
        </OfferCardsWrapper>
      </main>
    </Layout>
  )
}
export default Page;