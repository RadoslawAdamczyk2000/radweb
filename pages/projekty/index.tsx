import { NextPage } from "next";
import { useEffect, useState } from "react";
import Hero from "../../components/All/Hero/Hero";
import { Cards } from "../../components/Page/Blog/Cards/styles";
// import Hero from "../../components/Page/Blog/Hero/Hero";
import Card from "../../components/Page/Projects/Cards/Card";
import { Tags } from "../../components/Page/Projects/Tags/styles";
import Tag from "../../components/Page/Projects/Tags/Tag";
import { stack, stackArr } from "../../data/stack";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
    const [search,setSearch] = useState('');
    const tags:null|string[] = [];
    useEffect(() => {
        console.log(tags);
    })
  return(
    <Layout>
        <Hero
            content="W świecie technologi internetowych zestaw i rozwój narzędzi jest nieustanny. Dlatego, żeby być ciągle na bieżąco trzeba się ich uczyć, a najlepszym sposobem na naukę jest praktyka. Dla mnie najlepszym sposobem nauki jest pisanie stron internetowych oraz aplikacji webowych. Do tworzenia wcześniej wspomnianych stron i aplikacji korzystam z technologii front-endowych takich jak Vanila JavaScript, GatsbyJS, NextJS, React, Vue oraz Angular. Ponadto mam doświadczenie pracy z technologiami backendowymi, czyli z PHP, a także MySQL, które wykorzystywałem podczas zadań na Wordpressie, Joomli oraz Shopperze."
            withSearch={true}
            isVertical={false}
            withImage={false}
            handle={(e:any) => setSearch(e.target.value)}
            image='https://images.unsplash.com/photo-1634089729539-d229d916cda9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80'
            placeholder='Szukaj...'
            title="Projekty i realizacje komercyjne"
        />        
        <main>
            <Tags>
                {stackArr.map(({icon,title},key) =>
                    <Tag
                        icon={icon}
                        handle={tags}
                        key={key}
                        title={title}
                    />
                )}
            </Tags>
            <Cards>
                <Card
                    content="Każdy postawia swój pierwszy krok na rynku. Moim pierwszym krokiem była strona zrealizowana dla Borókowego Gaju - gospodarstwa, które należy do ojca mojego kolegi. Niedługo minie rok od zrealizowania tej strony. Dziś napewno napisałbym lepiej tą stronę, jednak z perspektywy pozycjonera statystyki są idealne."
                    link="/"
                    stack={[stack.html,stack.css,stack.bootstrap,stack.javascript]}
                    title="Borówkowy Gaj"
                />
            </Cards>
        </main>
    </Layout>
  )
}
export default Page;