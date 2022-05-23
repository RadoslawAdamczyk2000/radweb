import { NextPage } from "next";
import { useEffect, useState } from "react";
import Hero from "../../components/All/Hero/Hero";
import { Cards } from "../../components/Page/Blog/Cards/styles";
// import Hero from "../../components/Page/Blog/Hero/Hero";
import Card from "../../components/Page/Projects/Cards/Card";
import { Tags } from "../../components/Page/Projects/Tags/styles";
import Tag from "../../components/Page/Projects/Tags/Tag";
import { projects } from "../../content/projects";
import { stack, stackArr } from "../../data/stack";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
    const [search,setSearch] = useState('');
    const tags:null|string[] = [];
    const {seo,hero} = projects.home;
    return(
    <Layout
        description={seo.description}
        image={seo.image}
        title={seo.title}
    >
        <Hero
             content={hero.content}
             handle={(e:any) => setSearch(e.target.value)}
             image={hero.image}
             withSearch={true}
             placeholder='Szukaj...'
             title={hero.title}
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