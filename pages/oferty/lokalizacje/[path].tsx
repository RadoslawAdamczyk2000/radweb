import { useRouter } from "next/router";
import Ana from "../../../components/Page/Offers/Page/Content/Ana";
import Opt from "../../../components/Page/Offers/Page/Content/Opt";
import Seo from "../../../components/Page/Offers/Page/Content/Seo";
import Www from "../../../components/Page/Offers/Page/Content/Www";
import Hero from "../../../components/Page/Offers/Page/Hero/Hero";
import { offers } from "../../../content/offers";
import Layout from "../../../schemas/Layout";
const Page = () => {
    const router = useRouter();
    const {path:link} = router.query;
    const getProps = offers.locations.cards.filter((item:any) => item.path.includes(link));
    console.log(getProps); 
    const city = {
        city:getProps[0]?.city.city,
        dat:getProps[0]?.city.dat,
        loc:getProps[0]?.city.loc,
    }
    return(
        <Layout
            description={`Szukasz kompleksowej produkcji strony internetowej w ${city.loc} wraz z ofertą pozycjonowania, analizy i optymalizacji? Jeśli tak, to zapraszam do owocnej współpracy.`}
            title={`${city.city} - strony internetowe, seo, analityka - RadWEB`}
            image='https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
        >
            {
                city.city ?
                <>
                <Hero
                    city={city.city}
                    dat={city.dat}
                    loc={city.loc}
                />
                <main className='densely'>
                    <Www
                        city={city.city}
                        loc={city.loc}
                    />
                    <Seo
                        city={city.city}
                        dat={city.dat}
                    />
                    <Opt
                        city={city.city}
                        loc={city.loc}
                    />
                    <Ana
                        city={city.city}
                        loc={city.loc}
                    />
                </main> 
                </>:
                <>
                    <h1
                        style={{
                            margin:'10rem auto',
                            maxWidth:'95%',
                            textAlign:'center',
                            width:'45rem'
                        }}
                    >Niestety ale tego miasta jeszcze nie obsługuję</h1>
                </>
            }
        </Layout>
    )
}
export default Page;
