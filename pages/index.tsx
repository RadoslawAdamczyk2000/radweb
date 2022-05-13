import { NextPage } from "next";
import About from "../components/Page/Home/About/About";
import Blog from "../components/Page/Home/Blog/Blog";
import Hero from "../components/Page/Home/Hero/Hero";
import Movie from "../components/Page/Home/Movie/Movie";
import Offer from "../components/Page/Home/Offer/Offer";
import Projects from "../components/Page/Home/Projects/Projects";
import Reviews from "../components/Page/Home/Reviews/Reviews";
import Steps from "../components/Page/Home/Steps/Steps";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  return(
    <Layout>
      <Hero/>
      <main>
        <About/>
        <Blog/>
        <Movie/>
        <Offer/>
        <Projects/>
        <Steps/>
        <Reviews/>
      </main>
    </Layout>
  )
}
export default Page;