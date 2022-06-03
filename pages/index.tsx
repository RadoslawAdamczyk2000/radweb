import { NextPage } from "next";
import Link from "next/link";
import Menu from "../components/Layout/Navigation/Menu/Menu/Menu";
import Hero from "../components/Page/Home/Hero/Hero/Hero";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  return(
    <Layout
      isHome={true}
    >
      <>
        {/* <Hero/> */}
      </>
    </Layout>
  )
}
export default Page;