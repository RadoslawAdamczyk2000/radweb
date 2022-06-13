import { NextPage } from "next";
import { menu } from "../data/menu";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  console.log(menu);
  return(
    <Layout>
      <>
        <main>
          asdasdasd
        </main>
      </>
    </Layout>
  )
}
export default Page;