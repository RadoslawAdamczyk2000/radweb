import { NextPage } from "next";
import { useState } from "react";
import Hero from "../components/All/Hero/Hero";
import Search from "../components/All/Search/Search";
import Card from "../components/Page/Faq/Cards/Card";
import { Cards } from "../components/Page/Faq/Cards/styles";
import { faq } from "../content/faq";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  const {seo,hero,cards} = faq;
  const searching = (data:any) => {
    return data.filter(
    (item:any) =>
      item.content.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase()) 
    )
  }
  return(
    <Layout
      description={seo.description}
      image={seo.image}
      title={seo.title}
    >
      <Hero
        isVertical={true}
        withImage={true}
        content={hero.content}
        image={hero.image}
        title={hero.title}
      />
      <main>
          <Search
            handle={(e:any) => setSearch(e.target.value)}
            placeholder='Szukaj'
            title='FaqSearcher'
          />
          <Cards>
            {
              searching(cards).map(({content,title}:{content:string,title:string},key:number) =>
                <Card
                  content={content}
                  key={key}
                  title={title}
                />
              )
            }
          </Cards>
      </main>
    </Layout>
  )
}
export default Page;