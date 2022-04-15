import Layout from "../../schemas/Layout";
import { NextPage } from "next";
import { offers } from "../../content/pages/offers/offers";
import Cards from "../../components/bacterias/OffersPage/Cards";
import Card from "../../components/atoms/OffersPage/Card";
import Hero from "../../components/atoms/Page/Hero";
const Page:NextPage = () => {
  const {seo,hero,content} = offers.pl;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
      seoImg={hero.poster}
    >
      <Hero
        image={hero.poster}
        imageTitle={`${hero.title} - zdjęcie`}
        title={hero.title}
        isPage={true}
      >
        {hero.content}
      </Hero>
      <main className="larger">
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