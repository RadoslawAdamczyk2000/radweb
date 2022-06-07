import { NextPage } from "next";
import About from "../components/Page/Home/About/About/About";
import Blog from "../components/Page/Home/Blog/Blog/Blog";
import Hero from "../components/Page/Home/Hero/Hero/Hero";
import Partners from "../components/Page/Home/Partners/Partners/Partners";
import Projects from "../components/Page/Home/Projects/Projects/Projects";
import Testimonials from "../components/Page/Home/Testimonials/Testimonials";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  return(
    <Layout
      isHome={true}
    >
      <>
        <Hero/>
        <main>
          <Blog/>
          <Projects/>
          <Testimonials/>
          <Partners/>
          <About/>
        </main>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </>
    </Layout>
  )
}
export default Page;