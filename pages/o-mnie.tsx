import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { about } from "../content/pages/about";
import Hero from "../components/Page/Hero";
import Content from "../components/Article/Content";
import Title from "../components/Article/Title";
import Img from "../components/Article/Img";
import Movies from "../components/Page/Movies";
import Hobbies from "../components/Page/Hobbies";
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
        <Title isH2={true} title={born.heading}/>
        <Content isExcerpt={false}>{born.content}</Content>
        <Img
          isMain={true}
          image='https://raw.githubusercontent.com/RadoslawAdamczyk2000/rad-web-content/main/assets/snow.webp'
          title="Zdjęcię z klasą z liceum"
        />
        <Title isH2={true} title={education.heading}/>
        <Content isExcerpt={false}>{education.content}</Content>
        <Movies
          movies={story.education.movies}
        />
        <Title isH2={true} title={skills.heading}/>
        <Content isExcerpt={false}>{skills.content}</Content>
        <Img
          isMain={true}
          image='https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/assets/72426717_1251619528372354_2772731960315871232_n.jpg?raw=true'
          title="Urodzinowa pizza"
        />
        <Title isH2={true} title={passions.heading}/>
        <Content isExcerpt={false}>{passions.content}</Content>
        <Hobbies
          hobbies={hobbies}
        />
      </main>
    </Layout>
  )
}
export default Page;