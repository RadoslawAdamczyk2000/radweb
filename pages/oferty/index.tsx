import Layout from "../../schemas/Layout";
import { NextPage } from "next";
import { offers } from "../../content/pages/offers/offers";
import Hero from "../../components/atoms/OffersPage/Hero";
import Cards from "../../components/bacterias/OffersPage/Cards";
import Card from "../../components/atoms/OffersPage/Card";
const Page:NextPage = () => {
  const {seo,hero,content} = offers.pl;
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
          {content.map(({content,path,title}) =>
            <Card
              content={content}
              key={title}
              path={path}
              title={title}
            />
          )}
        </Cards>
      </main>
    </Layout>
  )
}
export default Page;