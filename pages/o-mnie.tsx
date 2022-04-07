import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { about } from "../content/pages/about";
import full from '../assets/images/full.webp';
import Image from "next/image";
import Hero from "../components/bacterias/AboutPage/Hero";
import Movies from "../components/atoms/AboutPage/Movies";
import Hobbies from "../components/atoms/AboutPage/Hobbies";
import Content from "../components/atoms/AboutPage/Content";
import Poster from "../components/atoms/AboutPage/Poster";
import pizza from '../assets/images/pizza.webp';
import snow from '../assets/images/snow.webp';
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
        image={full}
        links={hero.buttons}
        title={hero.title}
      />
      <main>
        <Content
          content={born.content}
          title={born.heading}
        />
        <Poster
          image={snow}
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
          image={pizza}
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