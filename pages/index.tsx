import { NextPage } from "next";
import Layout from "../schemas/Layout";
import { home } from "../content/pages/home";
import Hero from "../components/bacterias/HomePage/Hero/Hero";
import Link from "next/link";
import About from "../components/bacterias/HomePage/About/About";
import Offer from "../components/cells/HomePage/Offer/Offer";
import Projects from "../components/cells/HomePage/Projects/Projects";
import WhyMe from "../components/bacterias/HomePage/WhyMe/WhyMe";
import Blog from "../components/cells/HomePage/Blog/Blog";
const Page:NextPage = () => {
  return(
    <Layout 
      title="RadWEB"
      description=""
    >
      <Hero/>
      <main>
        <About/>
        <Offer/>
        <Blog/>
        <Projects/>
        <WhyMe/>
      </main>
    </Layout>
  )
}
export default Page;