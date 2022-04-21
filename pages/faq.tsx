import { NextPage } from "next";
import { useState } from "react";
import Cards from "../components/bacterias/FaqPage/Cards";
import Hero from "../components/Page/Hero";
import { faq as pages} from "../content/pages/faq";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const {seo,hero} = pages.pl;
  const [search,setSearch] = useState('');
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
        <Cards search={search}/>
      </main>
    </Layout>
  )
}
export default Page;