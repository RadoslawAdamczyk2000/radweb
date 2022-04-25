import { NextPage } from "next";
import ContactForm from "../components/Page/ContactForm";
import Content from "../components/Page/Content";
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
          isVertical={false}
          primary={false}
          title={content.title}
          withMedia={false}
        />
        <ContactForm/>
      </main>
    </Layout>
  )
}
export default Page;