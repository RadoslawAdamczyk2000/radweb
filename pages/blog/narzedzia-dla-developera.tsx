import Layout from "../../schemas/Layout";
import { NextPage } from "next";
import PostContent from "../../components/atoms/AllPages/PostContent";
import { tech } from "../../data/tech";
import Hero from "../../components/atoms/AllPages/Hero";
const Page:NextPage = () => {
  return(
    <Layout 
      title='Narzędzia developera, przeglądarki, edytory kodu - RadWEB'
      description='Na rynku narzędzi do pracy dla programistów jest sporo, lecz nie każdy jest wart uwagi. Jeśli chcesz poznać jakie są najlepsze to zapraszam do lektury artykułu.'
    >
      <Hero
        alt='Narzędzia dla developera - zdjęcie'
        image='https://cdn.pixabay.com/photo/2016/11/29/01/25/adult-1866533_960_720.jpg'
        tags={['programowanie','narzedzia','programy','przeglądarki','ranking']}
        time='1649499753060'
        title='Narzędzia dla developera'
      >
        <p>Jeżeli chcemy się nauczyć pisać strony internetowe to niezbędne będą nam trzy rzeczy: <b>program do pisania kodu</b>, <b>przeglądarka internetowa</b> oraz <b>samozaparcie</b>. Samemu korzytsałem z wielu IDE ( <i>IDE - Intergadeted Development Envoirment</i> ), potocznie nazywanych edytorami kodu. Również na swoim komputerze miałem zainstalowanych przeglądarek internetowych, ale wszystko opowiem po   kolei.</p>
      </Hero>
      <main style={{width:'75%'}}>
        <PostContent 
          heading={true} 
          isH2={true} 
          title="Przeglądarka internetowa"
        >
          <p>Przeglądarka internetowa to nic innego jak aplikacja służąca do przeglądania internetu. Przeglądatki są oparte o slnik, których jest kilka:</p>
          <ul>
            <li>Chromium (Google Chrome)</li>
            <li>Gecko (Mozilla Firefox)</li>
            <li>WebKit (Safari)</li>
            <li>Trident (Edge)</li>
          </ul>
        </PostContent>

        <PostContent 
          heading={true} 
          isH2={false} 
          title="Edge / Internet Explorer"
        >
          <p>Każdy używający systemu operacyjnego Windows zetknął się z Internet Explorerem lub Edgem, ponieważ ta przegląrka jest instalowana wraz z instalacją Windowsa i praktycznie każda osoba jeśli miała możliwa instalowała z marszu inną przeglądarkę. Powodem była arachaiczność tego programu na co dowodem tego są liczne memy, z którymi na pewno się spotkałeś nie raz. Dla mnie jako pozycjonera i programisty stron internetowych jest jeszcze jeden ważny argument, a mianowicie taki, że w Polsce bardzo znikoma ilość osób na codzień używa IE. To wszystko sprawia, że to jest najmniej użyteczna przeglądarka, mimo tego, że Microsoft Edge poczynił wielki skok technologiczny.</p>  
        </PostContent>
        <PostContent 
          heading={true} 
          isH2={false} 
          title="Safari"
        >
          <p>Ze Saphari jest podobnie jak z Internet Explorerem. Saphari jest domyślnie instalowana dla systemów Mac OS. Jednak w odróżnieniu dla Edge'a posiada szersze wsparcie dla bezpieczeństwa, i - jak jest wspomniane na stronie producenta - jest duża ilość customizacji (<i>dostosowania</i>) programu pod własne preferencje.</p>
        </PostContent>

        <PostContent 
          heading={true} 
          isH2={false} 
          title="Mozilla Firefox"
        >
          <p>Mozilla jest jedną z dwóch najpopularniejszych przeglądarek internetowych na świecie. Jednym z powodów dla którego jest na takiej lokacie to ilość rozszerzeń oraz wykorzystanie w pracy. Samemu pracując w Sunrise System na stanowisku pozycjonera to korzystaliśmy nacodzień z (archaicznego) Firefoxa. Również użytkownicy systemu operacyjnego Linux, prawie w każdej dystrybucji znajdą Mozillę Firefox.</p>
        </PostContent>
        <PostContent 
          heading={true} 
          isH2={false} 
          title="Google Chrome"
        >
          <p>Google Chrome to bezapelacyjnie najpopularniejsza i moim zdaniem najlepsza przeglądarka internetowa na świecie. Argumentów przemawiających za tym jest sporo. Posiada chociażby bardzo szeroką bibliotekę rozszerzeń oraz możliwości personalizacji. Równie ważną rzeczą dla mnie jest fakt przesyłania między przeglądarkami Google w ramach jednego konta chociażby historii przeglądania, paska zakładek i wcześniej wspomnianych rozszerzeń.</p>
        </PostContent>



        <PostContent 
          heading={true} 
          isH2={true} 
          title="IDE - Intergadeted Development Envoirment. Edytory kodu."
        >
          <p>Edytorów kodu podobnie jak przeglądarek jest sporo. I podobnie jak wyżej jedynie kilka z nich zasługuje na wymienienie. </p>
        </PostContent>



        <PostContent 
          heading={true} 
          isH2={false} 
          title="Notatnik"
        >
          <p>Z Windows'owego Notatnika korzystałem podczas pisania stron internetowych w gimnazjum. W nim się nauczyłem podstaw HTML'a. Niestety brak konsoli, podpowiadania składni, skrótów oraz rozszerzeń dają mu ostatnie miejsce. Szczerze? Pod żadnym pozorem nie polecam tego programu do kodowania.</p>
        </PostContent>
        <PostContent 
          heading={true} 
          isH2={false} 
          title="Nodepad ++ / PSPad"
        >
          <p>Notepad++ i PSPad są o stopień wyżej od Notatnika. Możliwość bardzo podstawowej personalizacji oraz możliwość out-of-the-box połączenia z bazą danych. Kolejnym autem tych edytorów kodów jest również minimalnie podpowiadanie syntaxu, czyli składni.</p>
        </PostContent>
        <PostContent 
          heading={true} 
          isH2={false} 
          title="Brackets / Atom"
        >
          <p>Programy znajdujące się na podium. Bogata paleta rozszerzeń (nie zawsze działających) i motywów to coś czego potrzeba. Wadą jest brak terminala, który bezapelacyjnie ułatwiałby pisanie chociażby aplikacji w React lub innym frameworku JavaScript.</p>
        </PostContent>
        <PostContent 
          heading={true} 
          isH2={false} 
          title="Webstorm"
        >
          <p>Webstorm jest komercyjnym produktem czeskiej firmy WebStorm. Jest dość drogi. W zamian za swoją cenę daje pełne wsparcie dla programisty, po przez pluginy, terminal, motywy oraz podpowiadanie składni. Mimo tych zalet, to dla mnie wadą jest <b>cena 73 euro miesięcznie</b>.</p>
        </PostContent>
        <PostContent 
          heading={true} 
          isH2={false} 
          title="VSC - Visual Studio Code"
        >
          <p>Visual Studio Code jest bezpłatnym IDE Microsoftu dla programistów front-endu i back-endu. Codziennie aplikowane są nowe wtyczki i motywy. Fakt, że VSC jest napisany w ElectronJS sprawia, że konfiguracja pod własne preferencje jest bajecznie prosta. To wszystko sprawia, że Visual Studio Code jest prawidziwym game changerem.</p>
        </PostContent>

        <PostContent 
          heading={false} 
          isH2={false} 
          title=""
        >
          <p>Podsumowując, najlepszą przeglądarką jest Google Chrome, a najlepszym edytorem kodu Visual Studio Code. Jednak wykorzystanie tych narzędzi nie gwarantuje Tobie nauczenie się tworzenia stron interntowych. Najważniejsze są determinacja i samozapracie, które bedą motywowały do codziennej nauki.</p>
        </PostContent>



      </main>
    </Layout>
  )
}
export default Page;