import { NextPage } from "next";
import Content from "../components/atoms/ContactPage/Content";
import Form from "../components/atoms/ContactPage/Form";
import { contact } from "../content/pages/contact";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const {content,seo} = contact.pl;
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
      seoImg={seo.image}
    >
      <main>
        <Content
          content={content.content}
          title={content.title}
        />
        <Form/>
      </main>
    </Layout>
  )
}
export default Page;