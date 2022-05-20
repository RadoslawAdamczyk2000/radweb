import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../components/All/Hero/Hero";
import Card from "../../components/Page/Offers/Cards/Card";
import { Cards } from "../../components/Page/Offers/Cards/styles";
import { offers } from "../../content/offers";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  const {cards,hero} = offers.home;
  return(
    <Layout>
      <Hero
        isVertical={false}
        withImage={true}
        content={hero.content}
        image={hero.image}
        title={hero.title}
      />
      <main>
            <Cards>
                {cards.map(({content,path,title},key) =>
                    <Card
                      button="Sprawdź"
                      content={content}
                      isMain={true}
                      key={key}
                      link={path}
                      title={title}
                    />
                )}
            </Cards>
      </main>
    </Layout>
  )
}
export default Page;