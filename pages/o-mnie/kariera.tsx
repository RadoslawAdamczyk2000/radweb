import { NextPage } from "next";
import Hero from "../../components/All/Hero/Hero";
import Cards from "../../components/Page/About/Career/Cards";
import { aboutMe } from "../../content/about-me";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
    const {seo,page} = aboutMe.carrer;
    const {hero} = page;
    return(
        <Layout
            description={seo.description}
            image={seo.image}
            title={seo.title}
        >
            <Hero
                content={hero.content}
                image={hero.image}
                withImage={true}
                isVertical={true}
                title={hero.title}
            />
            <main>
                <Cards/>
            </main>
        </Layout>
    )
}
export default Page;