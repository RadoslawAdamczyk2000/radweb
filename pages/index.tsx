import { NextPage } from "next";
import Blog from "../components/Page/Home/Blog/Blog";
import Hero from "../components/Page/Home/Hero/Hero";
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
        {/* <Blog/> */}
        <Offer/>
        <Projects/>
        <Steps/>
        <Reviews/>
      </main>
      <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ul>
    </Layout>
  )
}
export default Page;