import { NextPage } from "next";
import Hero from "../components/Page/Home/Hero/Hero";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  return(
    <Layout>
      <Hero/>
    </Layout>
  )
}
export default Page;