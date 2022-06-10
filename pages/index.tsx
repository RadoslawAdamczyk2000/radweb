import { NextPage } from "next";
import About from "../components/Page/Home/About/About/About";
import Blog from "../components/Page/Home/Blog/Blog/Blog";
import Hero from "../components/Page/Home/Hero/Hero/Hero";
import Offers from "../components/Page/Home/Offers/Offers/Offers";
import Partners from "../components/Page/Home/Partners/Partners/Partners";
import Projects from "../components/Page/Home/Projects/Projects/Projects";
import Steps from "../components/Page/Home/Steps/Steps/Steps";
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
          <Offers/>
          <Partners/>
          <Steps/>
          <About/>
        </main>
      </>
    </Layout>
  )
}
export default Page;