import { useRouter } from "next/router";
import Ana from "../../../components/Page/Offers/Page/Content/Ana";
import Opt from "../../../components/Page/Offers/Page/Content/Opt";
import Seo from "../../../components/Page/Offers/Page/Content/Seo";
import Www from "../../../components/Page/Offers/Page/Content/Www";
import Hero from "../../../components/Page/Offers/Page/Hero/Hero";
import Layout from "../../../schemas/Layout";
const Page = () => {
    const router = useRouter();
    const {city,path} = router.query;
    return(
        <Layout>
            <Hero
                city="Śrem"
                dat="Śremu"
                loc="Śremie"
            />
            <main className='densely'>
                <Www
                    city='Śrem'
                    loc="Śremie"
                />
                <Seo
                    city="Śrem"
                    dat='Śremu'
                />
                <Opt
                    city="Śrem"
                    loc="Śremie"
                />
                <Ana
                    city="Śrem"
                    loc="Śremie"
                />
            </main>
        </Layout>
    )
}
export default Page;