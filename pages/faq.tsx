import { AnimatePresence,motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../components/atoms/FaqPage/Button";
import Cards from "../components/bacterias/FaqPage/Cards";
import Form from "../components/bacterias/FaqPage/Form";
import Hero from "../components/cells/FaqPage/Hero";
import { faq as pages} from "../content/pages/faq";
import Layout from "../schemas/Layout";
const Page:NextPage = () => {
  const {seo,hero} = pages.pl;
  const [openForm,setOpenForm] = useState(false);
  const [search,setSearch] = useState('');
  useEffect(() => {
    console.log()
  })
  return(
    <Layout 
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        content={hero.content}
        handle={(e:any) => setSearch(e.target.value)}
        place={hero.search.place}
        tags={hero.tags}
        title={hero.title}
      />
      <main style={{width:'95%'}}>
        <Cards search={search}/>
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