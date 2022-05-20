import { NextPage } from "next";
import { useState } from "react";
import Hero from "../components/All/Hero/Hero";
import Search from "../components/All/Search/Search";
import Card from "../components/Page/Faq/Cards/Card";
import { Cards } from "../components/Page/Faq/Cards/styles";
import { faq } from "../data/faq";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  return(
    <Layout>
      <Hero
        isVertical={false}
        withImage={true}
        content="Chcesz się dowiedzieć ile wyniesie stworzenie, wypozycjonowanie lub optymalizacja strony internetowej? Albo masz pytanie, propozycję współpracy? Skorzystaj z poniższego formularza i napisz do mnie już teraz!"
        image="https://images.unsplash.com/photo-1519587107946-3e3ae929150e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
        title="Kontakt ze specjalistą"
      />
      <main>
      </main>
    </Layout>
  )
}
export default Page;