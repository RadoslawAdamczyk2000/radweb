import { NextPage } from "next";
import Cards from "../../components/Page/About/Certificates/Card/Cards";
import Hero from "../../components/Page/All/Hero/Hero";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
    return(
        <Layout>
            <Hero
                content="Jednym z dowodów na rozwój jest nauka poprzez kursy oraz zdobywanie branżowych certyfikatów. W branży IT tematycznych kursów - często bezpłatnych - nie brakuje.Jednym z dowodów na rozwój jest nauka poprzez kursy oraz zdobywanie branżowych certyfikatów. W branży IT tematycznych kursów - często bezpłatnych - nie brakuje.Jednym z dowodów na rozwój jest nauka poprzez kursy oraz zdobywanie branżowych certyfikatów. W branży IT tematycznych kursów - często bezpłatnych - nie brakuje."
                image="https://images.unsplash.com/photo-1627556704283-452301a45fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                isImage={true}
                title="Certyfikaty i kursy"
            />
            <main>
                <Cards/>
            </main>
        </Layout>
    )
}
export default Page;