import Layout from "../../../schemas/Layout";
import { NextPage } from "next";
import { opt } from "../../../content/pages/offers/opt";
import Hero from "../../../components/atoms/OffersPage/Hero";
import Cards from "../../../components/bacterias/OffersPage/Cards";
import Card from "../../../components/atoms/OffersPage/Card";
const Page:NextPage = () => {
  const {content,seo,hero} = opt.pl;
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
          {content.map(({content,title}) =>
            <Card
              content={content}
              key={title}
              title={title}
            />
          )}
        </Cards>
      </main>
    </Layout>
  )
}
export default Page;