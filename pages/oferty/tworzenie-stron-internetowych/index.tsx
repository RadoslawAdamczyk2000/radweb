import Layout from "../../../schemas/Layout";
import Hero from "../../../components/atoms/OffersPage/Hero";
import { NextPage } from "next";
import { www } from "../../../content/pages/offers/www";
import Cards from "../../../components/bacterias/OffersPage/Cards";
import Card from "../../../components/atoms/OffersPage/Card";
const Page:NextPage = () => {
  const {seo,hero,content} = www.pl;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        image={hero.poster}
        title={hero.title}
      />
      <main>
        <Cards>
          {content.map(({content,price,title}) => 
            <Card
              content={content}
              title={title}
              price={price}
              key={title}
            />
          )}
        </Cards>
      </main>
    </Layout>
  )
}
export default Page;