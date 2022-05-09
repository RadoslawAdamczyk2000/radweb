import { NextPage } from "next";
import Blog from "../components/Page/Home/Blog/Blog";
import Hero from "../components/Page/Home/Hero/Hero";
import Offer from "../components/Page/Home/Offer/Offer";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  return(
    <Layout>
      <Hero/>
      <main>
        <Blog/>
        <Offer/>
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