import Layout from "../../../schemas/Layout";
import Hero from "../../../components/atoms/OffersPage/Hero";
import { NextPage } from "next";
import { pos } from "../../../content/pages/offers/pos";
import Cards from "../../../components/bacterias/OffersPage/Cards";
import Card from "../../../components/atoms/OffersPage/Card";
const Page:NextPage = () => {
  const {seo,hero,content} = pos.pl;
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