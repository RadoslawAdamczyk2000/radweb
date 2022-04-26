import { NextPage } from "next";
import Content from "../components/Article/Content";
import Img from "../components/Article/Img";
import Title from "../components/Article/Title";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  return(
    <Layout 
      seoImg={'https://cdn.pixabay.com/photo/2018/02/07/18/30/people-3137670_960_720.jpg'}
      title={'Newsletter - RadWEB'}
      description={'Dziękuję za dołączenie do mojego newslettera.'}
      robots='noindex nofollow'
    >
      <main>
        <Title main={true} title="Newsletter"/>
        <Content isExcerpt={true}>
            Dziękuję bardzo za dołączenie do elitarnej grupy newsletterowej. Będziesz ode mnie otrzymywać co dwa tygodnie informacje o nowościach oraz rozwoju strony, ciekawostki z zakresu stron internetowych oraz historii. Na pewno nie będziesz się nudzić.
        </Content>
        <Img
            isMain={true}
            image="https://cdn.pixabay.com/photo/2018/02/07/18/30/people-3137670_960_720.jpg"
            title="Newsletter"
        />
        </main>
    </Layout>
  )
}
export default Page;