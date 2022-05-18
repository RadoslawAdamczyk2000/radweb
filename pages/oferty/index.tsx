import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../components/All/Hero/Hero";
import Card from "../../components/Page/Offers/Cards/Card";
import { Cards } from "../../components/Page/Offers/Cards/styles";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
  const [search,setSearch] = useState('');
  return(
    <Layout>
      <Hero
        isVertical={false}
        withImage={true}
        content="Chcesz się dowiedzieć więcej na temat mojej osoby oraz tego co robię? Otrzymasz tutaj odpowiedź na to z jakich obecnie narzędzi korzystam w pracy, czy też jaką mam swoją ulubioną epokę historyczną. Również Ty możesz zadać pytanie, na które udzielę odpowiedzi w wiadomości prywatnej lub na tej stronie."
        image="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        title="FAQ - pytania i odpowiedzi"
      />
      <main>
            <Cards>
                <Card
                    content="Tworzenie stron internetowych są rdzeniem mojej działalności. To jest to co po prostu kocham robić. Web development daje mi możliwość zarówno puszczenia wodzom fantazji jak też sposobność do poznania nowych narzędzi."
                    isMain={false}
                    title='Strony internetowe'
                    button="Sprawdź"
                />
                <Card
                    content="Tworzenie stron internetowych są rdzeniem mojej działalności. To jest to co po prostu kocham robić. Web development daje mi możliwość zarówno puszczenia wodzom fantazji jak też sposobność do poznania nowych narzędzi."
                    isMain={true}
                    title='Strony internetowe'
                    button="Sprawdź"
                />
                <Card
                    content="Tworzenie stron internetowych są rdzeniem mojej działalności. To jest to co po prostu kocham robić. Web development daje mi możliwość zarówno puszczenia wodzom fantazji jak też sposobność do poznania nowych narzędzi."
                    isMain={true}
                    title='Strony internetowe'
                    button="Sprawdź"
                />
                <Card
                    content="Tworzenie stron internetowych są rdzeniem mojej działalności. To jest to co po prostu kocham robić. Web development daje mi możliwość zarówno puszczenia wodzom fantazji jak też sposobność do poznania nowych narzędzi."
                    isMain={true}
                    title='Strony internetowe'
                    button="Sprawdź"
                />
                <Card
                    content="Tworzenie stron internetowych są rdzeniem mojej działalności. To jest to co po prostu kocham robić. Web development daje mi możliwość zarówno puszczenia wodzom fantazji jak też sposobność do poznania nowych narzędzi."
                    isMain={true}
                    title='Strony internetowe'
                    button="Sprawdź"
                />
            </Cards>
      </main>
    </Layout>
  )
}
export default Page;