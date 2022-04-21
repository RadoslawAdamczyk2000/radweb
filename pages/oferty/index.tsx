import Layout from "../../schemas/Layout";
import { NextPage } from "next";
import { offers } from "../../content/pages/offers/offers";
import Cards from "../../components/bacterias/OffersPage/Cards";
import Card from "../../components/atoms/OffersPage/Card";
import Hero from "../../components/Page/Hero";
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
      <main className="larger" style={{width:'100%'}}>
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