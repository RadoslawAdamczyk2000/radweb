import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../../components/All/Hero/Hero";
import { Cards } from "../../../components/Page/Offers/Cards/styles";
import Card from "../../../components/Page/Offers/City/Card";
import { offers } from "../../../content/offers";
import Layout from "../../../schemas/Layout";
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  const {cards,hero,seo} = offers.locations;
  return(
    <Layout
      description={seo.description}
      image={seo.image}
      title={seo.title}
    >
      <Hero
        withSearch={true}
        handle={(e:any) => setSearch(e.target.value)}
        placeholder='Szukaj..'
        content={hero.content}
        image={hero.image}
        title={hero.title}
      />
      <main>
          <Cards>
            {cards.map(({city,path},key) =>
              <Card
                city={city.city}
                key={key}
                link={path}
              />
            )}
          </Cards>
      </main>
    </Layout>
  )
}
export default Page;