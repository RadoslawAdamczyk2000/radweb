import { NextPage } from "next";
import Hero from "../../components/Page/About/Hero/Main/Hero";
import Layout from "../../schemas/Layout";
import Content from '../../components/Page/About/Content/Main/Content';
import { AboutHomeWrapper } from "../../components/Page/About/styles";
import Movies from "../../components/Page/About/Movies/Movies/Movies";
import Seo from "../../components/Layout/Seo/Seo";
import { about } from "../../content/about";
const Page:NextPage = () => {
    const {seo,hero,excerpt,biography,education,programming,passions} = about.pt.home;
    return(
        <Layout>
            <>
                <Seo
                    description={seo.description}
                    image="/assets/images/solider.webp"
                    title={seo.title}
                />
                <Hero
                    author="Radosław Adamczyk"
                    title={hero.title}
                    tags={[...hero.tags]}
                />
                <Content
                    cn="excerpt"
                    content={excerpt.content}
                />
                <AboutHomeWrapper>
                    <Content
                        cn="biography"
                        content={biography.content}
                        title={biography.title}   
                        image='/assets/images/snow.webp' 
                    />
                    <Content
                        cn="education"
                        content={education.content}
                        title={education.title}
                    />
                     <Content
                        cn="programming"
                        content={programming.content}
                        title={programming.title}
                    />
                    <Movies/>
                     <Content
                        cn="passions"
                        content={passions.content}
                        title={passions.content}   
                    />
                </AboutHomeWrapper>
            </>
        </Layout>
    )
}
export default Page;