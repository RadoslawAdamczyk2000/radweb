import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { about } from "../content/pages/about";
import Movies from "../components/atoms/AboutPage/Movies";
import Hobbies from "../components/atoms/AboutPage/Hobbies";
import Content from "../components/atoms/AboutPage/Content";
import Poster from "../components/atoms/AboutPage/Poster";
import Hero from "../components/Page/Hero";
const Page:NextPage = () => {
  const {hero,seo,story,hobbies} = about.pl;
  const {education,born,skills,passions} = story;
  return(
    <Layout 
      seoImg="https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/assets/276976195_390490625839906_3507921385087957587_n.jpg?raw=true"
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        image="https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/assets/276976195_390490625839906_3507921385087957587_n.jpg?raw=true"
        imageTitle={`${hero.title} - zdjęcie`}
        isHome={true}
        title={hero.title}
      />
      <main>
        <Content
          content={born.content}
          title={born.heading}
        />
        <Poster
          image='https://raw.githubusercontent.com/RadoslawAdamczyk2000/rad-web-content/main/assets/snow.webp'
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
          image='https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/assets/72426717_1251619528372354_2772731960315871232_n.jpg?raw=true'
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