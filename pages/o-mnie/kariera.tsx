import { NextPage } from "next";
import Hero from "../../components/All/Hero/Hero";
import Cards from "../../components/Page/About/Career/Cards";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
    return(
        <Layout>
            <Hero
                content="Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży.Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży.Jestem młodym programistą z codziennie rosnącym bagażem doświadczeń w świecie programowania i marketingu stron internetowych w wyszukiwarce Google. Podążam za aktualnymi trendami oraz czerpię wiedzę od renomowanych autorytetów w branży."
                image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                withImage={true}
                isVertical={true}
                title='Kariera'
            />
            <main>
                <Cards/>
            </main>
        </Layout>
    )
}
export default Page;