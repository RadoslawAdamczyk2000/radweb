import { NextPage } from "next";
import Hero from "../../components/All/Hero/Hero";
import Cards from "../../components/Page/About/Certificates/Card/Cards";
import { aboutMe } from "../../content/about-me";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
    const {seo,page} = aboutMe.courses;
    return(
        <Layout
            description={seo.description}
            image={seo.image}
            title={seo.title}
        >
            <Hero
                content={page.hero.content}
                image={page.hero.image}
                withImage={true}
                isVertical={true}
                title={page.hero.title}
            />
            <main>
                <Cards/>
            </main>
        </Layout>
    )
}
export default Page;