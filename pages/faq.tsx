import { AnimatePresence,motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../components/atoms/FaqPage/Button";
import Hero from "../components/atoms/Page/Hero";
import Cards from "../components/bacterias/FaqPage/Cards";
import Form from "../components/bacterias/FaqPage/Form";
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
      seoImg={'https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_960_720.jpg'}
      title={seo.title}
      description={seo.desc}
    >
      <Hero
        image="https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_960_720.jpg"
        imageTitle={`${hero.title} - zdjęcie`}
        title={hero.title}
        handle={(e:any) => setSearch(e.target.value)}
        isSearch={true}
      >
        {hero.content}
      </Hero>
      <main className="larger">
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