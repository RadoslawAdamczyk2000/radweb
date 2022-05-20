import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../components/All/Hero/Hero";
import Card from "../../components/Page/Offers/Cards/Card";
import { Cards } from "../../components/Page/Offers/Cards/styles";
import { offers } from "../../content/offers";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  const {cards,head,seo} = offers.www;
  return(
    <Layout>
      <Hero
        withSearch={true}
        content={head.content}
        image={head.image}
        title={head.title}
        handle={(e:any) => setSearch(e.target.value)}
        placeholder='Szukaj..'
      />
      <main>
          <Cards>
            {cards.map(({content,title},key) =>
                <Card
                  content={content}
                  isMain={true}
                  key={key}
                  title={title}
                />
            )}
          </Cards>
      </main>
    </Layout>
  )
}
export default Page;