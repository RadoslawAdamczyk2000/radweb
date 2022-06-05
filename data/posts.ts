import { stack } from "./stack";

export const posts = {
    articles:[
        {
            title:'Czym jest HTML? - historia czy teraźniejszość?',
            category:'programowanie',
            image:'https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_960_720.jpg',
            tags:['html','programowanie'],
            path:'/blog/programowanie/czym-jest-html-historia-czy-terazniejszosc',
            date:'11-04-2022',
            excerpt:'Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy.',
        },
        {
            title:'Czarny orzeł - Leszek Czarny',
            category:'historia',
            image:'https://cdn.pixabay.com/photo/2018/12/04/14/24/warrior-3855706_960_720.jpg',
            tags:['historia'],
            path:'/blog/historia/leszek-czarny',
            date:'12-04-2022',
            excerpt:'W 1241 na świat przyszedł pierworodny syn Kazimierza I kujawskiego oraz Konstacji wrocławskiej - Leszek Czarny. Leszek Czarny był kochany przez matkę niecałe 20 lat, ponieważ zmarła w 1257 roku. Przydomek "Czarny" syna Kazimierza pochodzi z XVI-wiecznej "Kroniki Dzierżwy". Leszek nie należał do pokornych, zwłaszcza w młodzieńczych latach. Po śmierci małżonki, owdowiały Kazimierz związał się węzłem małżeńskim z Eufrozyną. Decyzji ojca nie zaaprobowali Leszek wraz z bratem Siemowitem oraz lokalni możni - wrzód na tyłku wielu władców. Rezultatem nie zaakceptowania decyji był bunt przeciwko kujawskiemu w 1261 roku. Drużyna Leszka wyszła zwycięsko z rokoszu, gdzie Kazimierz wydzielił Czarnemu swoje poletko - księstwo sieradzkie.',
        },
       
        {
            title:'Cechy dobrej strony internetowej',
            category:'programowanie',
            image:'https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_960_720.jpg',
            tags:['programowanie','strony','html'],
            path:'/blog/programowanie/cechy-dobrej-strony-internetowej',
            date:'12-04-2022',
            excerpt:'W swoim życiu każdy z nas widział setki, jak nie tysiące stron internetowych. Jedne nam przypadły do gustu, inne niekoniecznie. Od czego to zależy? Najważniejszymi czynnikami są prędkość załadowania strony, kolory oraz typografia - to wszystko wpływa w sposób istotny na jakość strony w aspekcie front-end developerskim oraz jakości pozycjonowania. Ta Święta Trójca internetowa, jest swoistym kluczem do odniesienia sukcesu w tej przestrzeni.',
        },
        {
            title:'Pseudo CSS I - pseudoklasy',
            category:'programowanie',
            image:'https://cdn.pixabay.com/photo/2020/06/11/19/00/programming-5287885_960_720.jpg',
            tags:['programowanie','css'],
            path:'/blog/programowanie/pseudo-css',
            date:'18-04-2022',
            excerpt:'W najprostszym a i jednocześnie w najbardziej wymagającym języku opisowym jakim jest CSS (Cascading Style Sheets) posiadamy do wyboru wiele klas oraz atrybutów. CSS w stronach internetowych wykorzystywany jest do tworzenia styli oraz animacji, często bardzo zaaawansowanych. W tym ogromie autorzy Kaskadowych Arkuszy Styli (CSS) postanowili zaimplementować pseudo-elementy oraz tytułowe pseudo-klasy, w celu doboru interesujących nas elementów znajdujących się poza DOMem.',
        },
        {
            title:'Co to jest SEO?',
            category:'seo',
            image:'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
            tags:['seo'],
            path:'/blog/seo/co-to-jest-seo',
            date:'01-05-2022',
            excerpt:'SEO to skrót od Search Engine Optimization, który dosłownie tłumaczy się na optymalizowanie pod silniki wyszukiwarek. Natomiast działania optymalizacyjne stron internetowych, blogów oraz sklepów w wyszukiwarkach są nazywane pozycjonowaniem lub pracami SEO. Na świecie jest wiele wyszukiwarek internetowych, jednak jest kilka, które się faktycznie liczą: **Google**, **Bing**, **Yandex**, **Yahoo**, **Baidu**, **Duck Duck Go**. Zarówno na świecie, jak i na naszym rodzimym polskim podwórku, największą popularnością może się pochwalić Google.',
        },
        {
            title:'Fenomen  Windowsa',
            category:'windows',
            image:'https://images.unsplash.com/photo-1624571395775-253d9666612b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            tags:['windows'],
            path:'/blog/programowanie/fenomen-windowsa',
            date:'05-06-2022',
            excerpt:'W Polsce z komputera korzysta około 85% osób, którzy są sklasyfikowani pomiędzy trzy duże systemy operacyjne: Windows, Linux oraz MacOS. Jednakże w kraju nad Wartą i Wisłą dominują',
        },
//          {
//             title:'',
//             category:'',
//             image:'',
//             tags:[],
//             path:'',
//             date:'',
//             excerpt:'',
//         },
    ],
    projects:[
        {
            title:'Borówkowy Gaj',
            image:'https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/projekty/zdjecia/borowkowy-gaj.png?raw=true',
            stack:[stack.html,stack.css,stack.bootstrap,stack.javascript],
            path:'/projekty/borowkowy-gaj',
            excerpt:'Każdy postawia swój pierwszy krok na rynku. Moim pierwszym krokiem była strona zrealizowana dla Borókowego Gaju - gospodarstwa, które należy do ojca mojego kolegi. Niedługo minie rok od zrealizowania tej strony. Dziś napewno napisałbym lepiej tą stronę, jednak z perspektywy pozycjonera statystyki są idealne.'
        }
    ]
}
