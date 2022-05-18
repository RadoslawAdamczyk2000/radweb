import { NextPage } from "next";
import { useState } from "react";
import Hero from "../../../components/All/Hero/Hero";
import Card from "../../../components/Page/Blog/Cards/Card";
import { Cards } from "../../../components/Page/Blog/Cards/styles";
import Layout from "../../../schemas/Layout";
const Page:NextPage = () => {
    const [search,setSearch] = useState('');
  return(
    <Layout>
        <Hero
            content="Każda osoba, która mnie zna, będzie irytować to że większość spraw sprowadzam do historii. Faktycznie tak jest, bo wiem że większość sytuacji miała już miejsce w przeszłości - przez co wiem jakich błędów nie powtarzać. Pasjonuję się również wszystkim co jest związane ze stronami internetowymi - począwszy od procesu tworzenia po zadbanie o widoczność w sieci. Ponadto posiadam nieukrytą satysfakcję podczas podróży po Polsce, a w szczególności po wielkopolsce, bo uwielbiam podróżować po terenach Rzeczypospolitej. O tym wszystkim będzie traktował blog: o programowaniu, historii oraz podróżach, co nie oznacza że zamierzam ograniczać się jedynie do tych tematów."
            handle={(e:any) => setSearch(e.target.value)}
            image='https://images.unsplash.com/photo-1652648927946-6385c35c4a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            placeholder='Szukaj...'
            withSearch={true}
            title="Blog o programowaniu"
        />        
        <main>
          <Cards>
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
            <Card
              content="Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy."
              date={`25-04-2022`}
              image="https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              link="/"
              tags={['programowanie','seo']}
              title="Czym jest HTML? - historia czy teraźniejszość?"
            />
          </Cards>
        </main>
    </Layout>
  )
}
export default Page;