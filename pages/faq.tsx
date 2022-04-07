import { AnimatePresence,motion } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";
import Button from "../components/atoms/FaqPage/Button";
import Cards from "../components/bacterias/FaqPage/Cards";
import Form from "../components/bacterias/FaqPage/Form";
import Hero from "../components/cells/FaqPage/Hero";
import { faq } from "../content/pages/faq";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const {seo,hero} = faq.pl;
  const [openForm,setOpenForm] = useState(false);
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        place={hero.search.place}
        tags={hero.tags}
        title={hero.title}
      />
      <main>
        <Cards/>
      </main>
      <Button openForm={() => setOpenForm(true)} />
      <AnimatePresence>
        {
          openForm &&
          <motion.div
            initial={{opacity:0,visibility:'hidden'}}
            animate={{opacity:1,visibility:'visible'}}
            exit={{opacity:0,visibility:'hidden'}}
          >
            <Form
              closeForm={() => setOpenForm(false)}
              openForm={() => setOpenForm(true)}
            />
          </motion.div>
        }
      </AnimatePresence>
    </Layout>
  )
}
export default Page;