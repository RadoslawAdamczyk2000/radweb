import { NextPage } from "next";
import { useState } from "react";
import Hero from "../components/All/Hero/Hero";
import Form from "../components/Page/Contact/Field/Form";
import { contact } from "../content/contact";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  const {seo,hero} = contact;
  return(
    <Layout
      description={seo.description}
      image={seo.image}
      title={seo.title}
    >
      <Hero
        isVertical={false}
        withImage={true}
        content={hero.content}
        image={hero.image}
        title={hero.title}
      />
      <main>
        <Form/>
      </main>
    </Layout>
  )
}
export default Page;