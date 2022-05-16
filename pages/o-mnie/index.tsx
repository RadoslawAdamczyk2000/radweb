import { NextPage } from "next";
import dynamic from "next/dynamic";
// import Chart from "../../components/Page/About/Who/Content/Chart";
import MoviesSection from "../../components/Page/About/Who/Content/MoviesSection";
import Picture from "../../components/Page/About/Who/Content/Picture";
import Text from "../../components/Page/About/Who/Content/Text";
import Hero from "../../components/Page/About/Who/Hero/Hero";
import Layout from "../../schemas/Layout";
const Chart = dynamic(() => import("../../components/Page/About/Who/Content/Chart"), {
    ssr: false
})
const Page:NextPage = () => {
    return(
        <Layout>
            <Hero/>
            <main className="densely">
                <Text
                    content={`Przyszedłem na świat 9 października 2000 roku w śremskim szpitalu. Od najmłodszych dni mojego życia mieszkam w wiosce położonej na pograniczu gminy Śrem i Czempiń w województwie wielkopolskim - we wsi Donatowo.Przyszedłem na świat 9 października 2000 roku w śremskim szpitalu. Od najmłodszych dni mojego życia mieszkam w wiosce położonej na pograniczu gminy Śrem i Czempiń w województwie wielkopolskim - we wsi Donatowo.Przyszedłem na świat 9 października 2000 roku w śremskim szpitalu. Od najmłodszych dni mojego życia mieszkam w wiosce położonej na pograniczu gminy Śrem i Czempiń w województwie wielkopolskim - we wsi Donatowo.`}
                    heading="Życiorys"
                    path='zyciorys'
                />
                <Chart/>
                <Picture
                    image="https://images.unsplash.com/photo-1612993852041-6ead84601c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    title="abecadło"
                />
                <MoviesSection
                    content={`Moja ścieżka nauki przebiegała i nadal przebiega podobnie jak wielu innych osób. Pierwszą placówką edukacjyjnej, w której się uczyłem była Szkoła Podstawowa imienia generała Józefa Wybickiego w Manieczkach (gm. Brodnica), znanych z popularnego klubu Ekwador Manieczki. Dalej swoje kroki pokierowałem do nieistniejącego już dziś Gimnazjum imienia świętego Jana Pawła II w Manieczkach. Po ukończeniu tych szczebli nauki z ulgą opuściłem na zawsze tą miejscowość.Najważniejszą szkołą, do której poszedłem było Katolickie Publiczne Akademickie Liceum Ogólnokształcące imienia świętego Jana Pawła II w Śremie na profil matematyczno-fizyczno-informatyczno-historyczny. Tam to też starałem się angażować w życie szkoły po przez branie czynnego udziału w szkolnych spektaklach, np. "Taki Kraj" oraz o generale Filedorfie Nilu. W KPALO poznałem wiele osób, w tym zarówno nauczycieli przekazujących swoją wiedzę z pasją i zapałem, wiele rówieśników oraz przyjaciół - jak mam nadzieję przyjaciół na całe życie. To tutaj przeżyłem swoje pierwsze zauroczeniaObecnie uczę się zaoczenie w szkole policealnej "Cosinus" w Poznaniu na kierunku technik administracji. Ale dlaczego właśnie na tym kierunku? Mam kilka powodów ale jeden wysuwa się na prowadzenie - kwestie praktyczne. To znaczy, że po tym kierunku będę posiadał praktyczną wiedzę co do prowadzenia ewentualnej własnej działalności gospodarczej.`}
                    heading="Edukacja"
                    movies={[
                        {
                            movie:'https://www.youtube.com/embed/vkdGrF1OUJU',
                            movieTitle:'Generał Nil - droga bohatera'
                        },
                        {
                            movie:'https://www.youtube.com/embed/z8Z5IPS0c5A',
                            movieTitle:'Orszak Trzech Króli 2019'
                        },
                        {
                            movie:'https://www.youtube.com/embed/SjODbij7JfQ',
                            movieTitle:'Noc Nauki 2017'
                        },
                        {
                            movie:'https://www.youtube.com/embed/ayBsVgKYvys',
                            movieTitle:'Taki kraj - widowisko słowno-muzyczne'
                        },
                    ]}
                    path="edukacja"
                />
            </main>
        </Layout>
    )
}
export default Page;