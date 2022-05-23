import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../../components/All/Hero/Hero";
import Card from "../../../components/Page/Blog/Cards/Card";
import { Cards } from "../../../components/Page/Blog/Cards/styles";
import { blog } from "../../../content/blog";
import Layout from "../../../schemas/Layout";
const Page:NextPage = () => {
    const [search,setSearch] = useState('');
    const {seo,hero} = blog.programming;
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
            placeholder='Szukaj...'
            withSearch={true}
            title={hero.title}
        />        
        <main>
          <Cards>
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
          </Cards>
        </main>
    </Layout>
  )
}
export default Page;