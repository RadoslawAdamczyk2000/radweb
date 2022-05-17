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
                    content={`Urodziłem się 9 października 2000 roku w szpitalu powiatowym imienia Tadeusza Malińskiego w Śremie. Na codzień mieszkam na granicy dwóch światów, dwóch powiatów - powiatu śremskiego i kościańskiego. Formalnie mieszkam w uroczej wsi Donatowo, należącej do gminy Czempiń w powiecie kościańskim na terenie województwa wielkopolskiego. Otoczenie wśród przestronnych pól i zdala od sąsiadów daje mi niewiarygodnie sprzyjające warunki do wspaniałej egzystencji i rozwoju.`}
                    heading="Życiorys"
                    path='zyciorys'
                />
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
                <Text
                    content={`Swoją przygodę z światem informatyki rozpocząłem w gwiazdkę 2008 roku, kiedy to otrzymałem swój pierwszy komputer z systemem Windows 98 pod choinkę. Posiadam wielki sentyment do tego sprzętu mimo tego, że nie miał on połączenia z interentem przez co musiałem bazować - wtedy głównie mnie to interesowało - na grach komputerowych. Poźniej, to jest w 2010 roku przyszedł czas na komputer, który stał na Windows 7. Ten sprzęt przetrwał do 2021 roku i przeszedł naprawdę wiele. Posiadał również wiele systemów operacyjnych tj. Windows 8.1, Windows 10 oraz dystrybucje Linuxa : Ubuntu, Mint, Manjaro, Zorin OS oraz Elementary OS.Swój wstęp do dziedziny programowania miałem w gimnazjum w 2016, kiedy to nauczyciel informatyki zaprezentował nam jak tworzy się strony internetowe w Notatniku - szczerze mówiąc z perspektywy czasu nie było to najprzyjemniejsze doznanie w życiu. Jednak właśnie ten dział IT tak mnie zainspirował, że zacząłem się uczyć na własną rękę. Przez to miałem okazję uczyć się od najlepszych - Pasji Informatyki, Samuraja Programowania oraz Hello Romana.W szkole średniej na rozszerzonej informatyce nie wiele było o tworzeniu stron internetowych - zajęcia o tej tematyce ograniczały się do HTML i CSS. Z racji takiego, a nie innego ówczesnego programu nauczania uczyłem się C++ (ten język dał mi wiele pod kątem zrozumienia typowania, a także tablic i tablic asocjacyjnych), MySQL (wstęp do baz danych, z którymi każdy front-end developer pracuje) oraz Acess, moim zdaniem najzbędniejszy ze wszystkich.Od stycznia 2020 roku do dziś zrobiłem moim zdaniem ogromny progres. Poznałem w tak zwanym międzyczasie JavaScript, fundamenty Reacta, Gatsby oraz NextJS - frameworka Reacta, na którym jest postawiona ta strona. W pracy w Sunrise System miałem przyjemność zaznajomić się z podstawami języka PHP, pozycjonowaniem oraz wieloma systemami zarządzania treści, zwanymi potocznie CMS. Branża IT zmienia się nieustannie. Codziennie dodawane są nowe pluginy, a co kilka miesięcy zmienia się wiodący framework JavaScript. Zbierając to wszystko w całość, jeśli będę chciał zostać w tej branży jestem zmuszony do nieustannego kształcenia się w tym kierunku.`}
                    heading="Programowanie - nauka, narzędzia, stack"
                    path='programowanie'
                />
                <Chart/>
                <Text
                    content={`Posiadam szeroki wachlarz zainteresowań. Są one w głównej mierze ukierunkowane na strony interentowe, historię, gry komputerowe oraz filmy i muzykę.Historia można powiedzieć jest moją pierwszą miłością. Do tej dziedziny nauki zachęciły mnie filmy oraz książki "Historia bez cenzury". Miałem również szczeście do dydaktyków. Śp. pan Wojciech Cierżniak nauczył mnie bardzo ważnej definicji tego przedmiotu, a mianowicie historia to nic innego jak nauka o życiu. W dalszej kolejności był pan Piotr Dogondke, który opowiadał wiele ciekawych informacji o czasach swojej młodości, strajakch studenckich jak i czasa bardziej odległych jak jego młodość. Ostatnim nauczycielem historii był pan Krystian Kaliszak, który z zapałem przygotowywał mnie do matury rozszerzonej z tego przedmiotu.Co najbardziej lubię w historii? Możliwość poznania realiów życia naszych przodków, o tym jakie odnosili zwycięstwa oraz jakie ponosili porażki.`}
                    heading="Zainteresowania"
                    path='zainteresowania'
                />
            </main>
        </Layout>
    )
}
export default Page;