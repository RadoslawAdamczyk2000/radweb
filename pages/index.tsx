import { NextPage } from "next";
import Blog from "../components/Page/Blog";
import BlogCard from "../components/Page/BlogCard";
import Content from "../components/Page/Content";
import Hero from "../components/Page/Hero";
import Offers from "../components/Page/Offers";
import ProjectCard from "../components/Page/ProjectCard";
import Projects from "../components/Page/Projects";
import { home } from "../content/pages/home";
import { posts } from "../data/posts";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const {about,blog,hero,seo,projects,whyMe} = home.pl;
  const {articles,projects:cases} = posts;
  return(
    <Layout 
      seoImg={hero.image}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        image={hero.image}
        imageTitle={`${hero.title} - wieża widokowa Śrem - zdjęcie`}
        isHome={true}
        title={hero.title}
      />
      <main>
        <Content
          content={about.content}
          primary={true}
          title={about.title}
          button={about.button}
          movie={true}
          moviePath={about.movie}
          path={about.path}
          withMedia={true}
        />
        <Offers isHome={true} />
        <Blog 
          button={blog.button}
          content={blog.content}
          isHome={true}
          path={blog.path}
          title={blog.title}
        >
          <BlogCard 
            date={articles[articles.length -1].time} 
            image={articles[articles.length -1].poster} 
            isHome={true} 
            path={articles[articles.length -1].path} 
            title={articles[articles.length -1].title}
          />
          <BlogCard 
            date={articles[articles.length -2].time} 
            image={articles[articles.length -2].poster} 
            isHome={true} 
            path={articles[articles.length -2].path} 
            title={articles[articles.length -2].title}
          />
          <BlogCard 
            date={articles[articles.length -3].time} 
            image={articles[articles.length -3].poster} 
            isHome={true} 
            path={articles[articles.length -3].path} 
            title={articles[articles.length -3].title}
          />
        </Blog>
        <Projects
          button={projects.button}
          content={projects.content}
          isHome={true}
          path={projects.path}
          title={projects.title}
        > 
          <ProjectCard 
            excerpt={cases[cases.length - 1].excerpt}
            image={cases[cases.length - 1].image}
            imageTitle={`${cases[cases.length - 1].title} - zdjęcie`}
            isHome={true}
            path={cases[cases.length - 1].path}
            socials={cases[cases.length - 1].stack}
            title={cases[cases.length - 1].title}
          />
        </Projects>
        <Content
          content={whyMe.content}
          title={whyMe.title}
          movie={false}
          primary={false}
          imagePath={whyMe.image}
          withMedia={true}
        />
      </main>
    </Layout>
  )
}
export default Page;