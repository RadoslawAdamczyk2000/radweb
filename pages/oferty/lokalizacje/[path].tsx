import { useRouter } from "next/router";
import Ana from "../../../components/Page/Offers/Page/Content/Ana";
import Opt from "../../../components/Page/Offers/Page/Content/Opt";
import Seo from "../../../components/Page/Offers/Page/Content/Seo";
import Www from "../../../components/Page/Offers/Page/Content/Www";
import Hero from "../../../components/Page/Offers/Page/Hero/Hero";
import { offers } from "../../../content/offers";
import Layout from "../../../schemas/Layout";
const Page = (props:object) => {
    const router = useRouter();
    console.log(props)
    const {path:link} = router.query;
    const getProps = offers.locations.cards.filter((item:any) => item.path.includes(link));
    console.log(getProps); 
    const city = {
        city:getProps[0]?.city.city,
        dat:getProps[0]?.city.dat,
        loc:getProps[0]?.city.loc,
    }
    return(
        <Layout>
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
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}
export async function getStaticProps(context:object) {
    console.log('ssr get static props console log')
    console.log(context)
    return {
      props: {}, 
    }
  }
