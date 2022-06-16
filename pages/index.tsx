import { NextPage } from "next";
import Hero from "../components/Page/Home/Hero/Hero/Hero";
import { menu } from "../data/menu";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  return(
    <Layout
      isHome={true}
    >
      <>
        <Hero
          movie="/assets/movies/corridor.mp4"
          title="Programowanie i SEO"
        />
        <main>
        </main>
      </>
    </Layout>
  )
}
export default Page;