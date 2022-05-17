import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../components/Page/Blog/Hero/Hero";
import Layout from "../../schemas/Layout";
const Page:NextPage = () => {
    const [search,setSearch] = useState('');
  return(
    <Layout>
        <Hero
            content="Każda osoba, która mnie zna, będzie irytować to że większość spraw sprowadzam do historii. Faktycznie tak jest, bo wiem że większość sytuacji miała już miejsce w przeszłości - przez co wiem jakich błędów nie powtarzać. Pasjonuję się również wszystkim co jest związane ze stronami internetowymi - począwszy od procesu tworzenia po zadbanie o widoczność w sieci. Ponadto posiadam nieukrytą satysfakcję podczas podróży po Polsce, a w szczególności po wielkopolsce, bo uwielbiam podróżować po terenach Rzeczypospolitej. O tym wszystkim będzie traktował blog: o programowaniu, historii oraz podróżach, co nie oznacza że zamierzam ograniczać się jedynie do tych tematów."
            handle={(e:any) => setSearch(e.target.value)}
            image='https://images.unsplash.com/photo-1634089729539-d229d916cda9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80'
            placeholder='Szukaj...'
            title="Projekty"
        />        
        <p>{search}</p>
        <main>
        </main>
    </Layout>
  )
}
export default Page;