import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { home } from "../content/pages/home";
import About from "../components/bacterias/HomePage/About/About";
import Offer from "../components/cells/HomePage/Offer/Offer";
import Projects from "../components/cells/HomePage/Projects/Projects";
import WhyMe from "../components/bacterias/HomePage/WhyMe/WhyMe";
// import Blog from "../components/cells/HomePage/Blog/Blog";
import Hero from "../components/Page/Hero";
import Content from "../components/Page/Content";
import Offers from "../components/Page/Offers";
import Blog from "../components/Page/Blog";
import { posts } from "../data/posts";
import BlogCard from "../components/Page/BlogCard";
const Page:NextPage = () => {
  const {about,blog,hero,seo,whyMe} = home.pl;
  const {articles} = posts;
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
        <Projects/>
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