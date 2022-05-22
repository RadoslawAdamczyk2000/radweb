import { NextPage } from "next";
import dynamic from "next/dynamic";
import Hero from "../../components/All/Hero/Hero";
// import Chart from "../../components/Page/About/Who/Content/Chart";
import MoviesSection from "../../components/Page/About/Who/Content/MoviesSection";
import Picture from "../../components/Page/About/Who/Content/Picture";
import Text from "../../components/Page/About/Who/Content/Text";
import { aboutMe } from "../../content/about-me";
import Layout from "../../schemas/Layout";
const Chart = dynamic(() => import("../../components/Page/About/Who/Content/Chart"), {
    ssr: false
})
const Page:NextPage = () => {
    const {page,seo} = aboutMe.home;
    const {education,hero,hobbies,lifestory,programming} = page;
    return(
        <Layout
            description={seo.description}
            image={seo.image}
            title={seo.title}

        >
            <Hero
                content={hero.content}
                image={hero.image}
                title={hero.title}
                isVertical={false}
                withImage={true}
            />
            <main className="densely">
                <Text
                    content={lifestory.content}
                    heading={lifestory.title}
                    path='zyciorys'
                />
                <Picture
                    image={lifestory.image}
                    title={lifestory.title}
                />
                <MoviesSection
                    content={education.content}
                    heading={education.title}
                    movies={education.movies}
                    path="edukacja"
                />
                <Text
                    content={programming.content}
                    heading={programming.title}
                    path='programowanie'
                />
                <Chart/>
                <Text
                    content={hobbies.content}
                    heading="Zainteresowania"
                    path='zainteresowania'
                />
            </main>
        </Layout>
    )
}
export default Page;