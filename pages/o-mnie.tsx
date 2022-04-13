import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { about } from "../content/pages/about";
import Hero from "../components/bacterias/AboutPage/Hero";
import Movies from "../components/atoms/AboutPage/Movies";
import Hobbies from "../components/atoms/AboutPage/Hobbies";
import Content from "../components/atoms/AboutPage/Content";
import Poster from "../components/atoms/AboutPage/Poster";
const Page:NextPage = () => {
  const {hero,seo,story,hobbies} = about.pl;
  const {education,born,skills,passions} = story;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        image='../assets/images/full.webp'
        links={hero.buttons}
        title={hero.title}
      />
      <main>
        <Content
          content={born.content}
          title={born.heading}
        />
        <Poster
          image='../assets/images/snow.webp'
          imageTitle="Zdjęcię z klasą z liceum"
        />
        <Content
          content={education.content}
          title={education.heading}
        />
        <Movies
          movies={story.education.movies}
        />
        <Content
          content={skills.content}
          title={skills.heading}
        />
        <Poster
          image='../assets/images/pizza.webp'
          imageTitle="Urodzinowa pizza"
        />
        <Content
          content={passions.content}
          title={passions.heading}
        />
        <Hobbies
          hobbies={hobbies}
        />
      </main>
    </Layout>
  )
}
export default Page;