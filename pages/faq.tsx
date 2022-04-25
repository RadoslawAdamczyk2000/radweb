import { NextPage } from "next";
import { useState } from "react";
import FaqCard from "../components/Page/FaqCard";
import Hero from "../components/Page/Hero";
import { FaqWrapper } from "../components/Page/styles";
import { faq as pages} from "../content/pages/faq";
import { faq } from "../data/faq";
import Layout from "../schemas/Layout";
interface i{
  content:string,
  id:number,
  title:string
}
const Page:NextPage = () => {
  const {seo,hero} = pages.pl;
  const {pl} = faq;
  const [search,setSearch] = useState('');
  const searching = (data:any) => {
    return data.filter(
      (item:any) =>
      item.content.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  }
  return(
    <Layout 
      seoImg={'https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_960_720.jpg'}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        image='https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_960_720.jpg'
        imageTitle={`${hero.title} - zdjęcie`}
        handle={(e:any) => setSearch(e.target.value)}
        isHome={false}
        title={hero.title}
      />
      <main className="larger">
        <FaqWrapper>
          {searching(pl).map(({content,id,title}:i) =>
            <FaqCard
              content={content}
              key={id}
              title={title}
            />
          )}
        </FaqWrapper>
      </main>
    </Layout>
  )
}
export default Page;